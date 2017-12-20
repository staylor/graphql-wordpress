import bcrypt from 'bcrypt';
import Model from './Model';

const SALT_ROUNDS = 10;

export default class User extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('user');
  }

  all({ limit = 10, offset = 0, search = null }) {
    const criteria = {};
    if (search) {
      criteria.$text = { $search: search };
    }

    return this.collection
      .find(criteria, { hash: 0 })
      .sort({ name: 1 })
      .skip(offset)
      .limit(limit)
      .toArray();
  }

  async insert(doc) {
    const { password, ...fields } = doc;
    if (!fields.email || !password) {
      throw new Error('Email and Password are required.');
    }
    const exists = await this.count({ email: fields.email });
    if (exists) {
      throw new Error('Email already exists.');
    }
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const docToInsert = Object.assign({ roles: [] }, fields, {
      hash,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }

  async updateById(id, { password = null, ...fields }) {
    const user = await this.findOneById(id);
    const docToUpdate = Object.assign({}, fields);
    if (fields.email !== user.email) {
      const exists = await this.count({ email: fields.email });
      if (exists) {
        throw new Error('Email already exists.');
      }
    }
    if (password) {
      docToUpdate.hash = await bcrypt.hash(password, SALT_ROUNDS);
    }
    const ret = await this.collection.update(
      { _id: id },
      {
        $set: Object.assign({}, docToUpdate, {
          updatedAt: Date.now(),
        }),
      }
    );
    this.loader.clear(id);
    return ret;
  }
}

import Model from './Model';

export default class Settings extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('settings');
  }
}

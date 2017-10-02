import Dataloader from 'dataloader';

class DataloaderMock extends Dataloader {
  constructor(batchLoadFn, options) {
    super(batchLoadFn, options);
    // eslint-disable-next-line no-underscore-dangle
    this._batchLoadFn = ids =>
      Promise.resolve(
        ids.map(id => {
          const isNumber = String(id).match(/^[0-9]+$/);
          if (typeof id === 'string' && !isNumber) {
            return { slug: id };
          }
          return { id: parseInt(id, 10) };
        })
      );
  }
}

export default DataloaderMock;

import isPromise from 'is-promise';

const UNRESOLVED = {};

export function isResolved(value) {
  return value !== UNRESOLVED;
}

export function checkResolved(value) {
  if (!isPromise(value)) {
    return value;
  }

  return Promise.race([
    value,
    new Promise(resolve => {
      setImmediate(resolve, UNRESOLVED);
    })
  ]);
}

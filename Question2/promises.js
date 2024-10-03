function resolvedPromise() {
  return new Promise((resolve) => {
    let success = { message: 'delayed success!' };
    resolve(success);
  });
}
function rejectedPromise() {
  return new Promise((resolve, reject) => {
    let error = { error: 'delayed exception!' };
    reject(error);
  });
}
resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
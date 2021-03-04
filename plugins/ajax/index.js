import service from './request';

const request = {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      service
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      service.post(url, data).then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      );
    });
  },

  delete(url, data = {}) {
    return new Promise((resolve, reject) => {
      service.delete(url, data).then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      );
    });
  },

  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      service.put(url, data).then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}

export default ({
  app
}, inject) => {
  inject('ajax', request);
}

// export default {
//   get(url, params = {}) {
//     return new Promise((resolve, reject) => {
//       service
//         .get(url, {
//           params: params
//         })
//         .then(response => {
//           resolve(response.data);
//         })
//         .catch(err => {
//           reject(err);
//         });
//     });
//   },

//   post(url, data = {}) {
//     return new Promise((resolve, reject) => {
//       service.post(url, data).then(
//         response => {
//           resolve(response.data);
//         },
//         err => {
//           reject(err);
//         }
//       );
//     });
//   },

//   delete(url, data = {}) {
//     return new Promise((resolve, reject) => {
//       service.delete(url, data).then(
//         response => {
//           resolve(response.data);
//         },
//         err => {
//           reject(err);
//         }
//       );
//     });
//   },

//   put(url, data = {}) {
//     return new Promise((resolve, reject) => {
//       service.put(url, data).then(
//         response => {
//           resolve(response.data);
//         },
//         err => {
//           reject(err);
//         }
//       );
//     });
//   }
// }

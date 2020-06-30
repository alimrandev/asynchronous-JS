// Synchronous programming

// console.log(1);
// setTimeout(() => {
//   console.log('execute after 2sec');
//   console.log(2);
// }, 2000);
// console.log(3);

// Asynchronous Programming

// setTimeout(()=>{
//   console.log(2)
// },2000)

// callback
// Promise api
// async await

// function number(num, callback) {
//   setTimeout(() => {
//     return callback(num);
//   }, 2000);
// }

// console.log(1);
// number(2, function (num) {
//   console.log(num);
// });
// console.log(3);

// Promise api

// pending
// resolve
// reject

const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hy Everything is fine');
    // reject(new Error('Something error'));
  }, 2000);
});

result
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });

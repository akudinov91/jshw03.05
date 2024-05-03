// задача 1

// function delayExecution(milliseconds) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, milliseconds);
//   });
// }

// delayExecution(2000).then(() => {
//   console.log(`Delay in 2 seconds finished`);
// });

// задача 2

// function firstTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`First task completed`);
//     }, 2000);
//   });
// }

// function secondTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Second task completed`);
//     }, 1000);
//   });
// }

// firstTask()
//   .then((result) => {
//     console.log(result);
//     return secondTask();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// Задача 3
// function firstPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Message from first promise`);
//     }),
//       2000;
//   });
// }

// function secondPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Message from second promise`);
//     }),
//       1500;
//   });
// }

// function thirdPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Message from third promise`);
//     }),
//       1000;
//   });
// }

// Promise.all([firstPromise(), secondPromise(),thirdPromise()]).then(messages=>{
//     console.log(messages)
// })

// задача 4

// function fastTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Fast task completed`);
//     }),
//       1000;
//   });
// }

// function slowTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Slow task completed`);
//     }, 3000);
//   });
// }

// Promise.race([fastTask(),slowTask()]).then(result => {
//     console.log(result)
// })

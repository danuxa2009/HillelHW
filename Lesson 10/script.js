// // function counter() {
// //     let counts = 0

// //     return {
// //         count: () => counts,
// //         set: value(counts = value),
// //         get: () => counts,
// //         reset: () => (counts = 0)
// //     };
// // }

// // const count = counter();

// // console.log(count());
// // console.log(count(10));
// // console.log(count());
// // console.log(count());
// // console.log(count());
// // console.log(count());




// function createCounter(value) {
//     return () => value;
// }

// const counter = createCounter(10);

// console.log(counter());





function say() {
    console.log(this);
}

const obj = {
    talk: say
};
say();


obj.talk();
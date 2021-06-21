

// const a = [1,2,2,4, 3 ,1];
// const duplicates = [];
// for(let i = 0; i< a.length - 1; i++) {
//     const selectedEle = a[i];
//     for (let j = i +1; j < a.length; j++) {
//         if(selectedEle === a[j]) {
//             // console.log(`${selectedEle} is duplicate`)
//             duplicates.push(selectedEle);
//         }

//     }
// }

// console.log(duplicates)

const a = { name: 'babu', age: 25 };
const b = { name: 'balu', age: 35 };
const c = { name: 'g3', age: 12 };
const d = { name: 'yuva', age: 15 };
const e = { name: 'maga', age: 2 };
const f = { name: 'maha', age: 5 };
const g = { name: 'madhu', age: 50 };
const h = { name: 'balu', age: 10 };
const i = { name: 'sri', age: 40 };
const j = { name: 'vsd', age: 20 };
const k = { name: 'gayat', age: 10 };
const allarray = [];
allarray.push(a, b, c, d, e, f, g, h, i, j, k);

allarray.sort((a, b) => a.age - b.age);

console.log(allarray);

// const a=[]
// a[0]={ name : 'babu',   age : 25},
// a[1] ={ name : 'balu',   age : 35},
// a[2] = { name : 'g3',   age : 12},
//  a[3]  = { name : 'yuva',   age : 15},
// a[4]  = { name : 'maga',   age : 2},
//  a[5]  = { name : 'maha',   age : 5},
//  a[6] = { name : 'madhu',   age : 50},
//  a[7] = { name : 'balu',   age : 10},
//  a[8]  = { name : 'sri',   age : 40},
//  a[9] = { name : 'vsd',   age : 20};
//  console



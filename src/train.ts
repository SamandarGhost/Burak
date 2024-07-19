// MIT TASK - W

function chunkArray(a:number[], n: number): number[][] {
    const b:number[][] = [];
    for (let i = 0; i < a.length; i += n) {
        b.push(a.slice(i, i + n));
    }
    return b;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2));



// // MIT TASK - U 

// function toqSon(a: number): number {
//     let son = 0;
//     for(let i = 0; i < a; i++) {
//         if ( i % 2 !== 0) {
//             son++;
//         }
//     }
//     return son;
// }

// console.log(toqSon(11));

// // MIT TASK - T

// function tartibla(a1: number[], a2: number[]): number[] {
//     return [...a1, ...a2].sort((a, b) => a - b);
//   }
//  console.log(tartibla([1,4, 6], [2, 5, 9]));

 
// // MIT TASK - S

// function yiqildi(a: number[]): number {
//     a.sort((a, b) => a - b);

//     for (let i: number = 0; i < a.length; i++) {
//         if (a[i] !== i + 1) {
//             return i + 1;
//         }
//     }

//     return a.length + 1;
// }

// console.log(yiqildi([1, 2, 3, 5]));


/*  Project Standards
        - Logging standards
        - Naming standards
            1. function, method, variable => CAMEL
            2. class => PASCAL
            3. folder, file => KEBAB
            4.css => SNAKE
        - Error handling


*/

/* Request: 
    Traditinal API ( form POST )
    Rest API
    GraphQL API 
*/

/* Frontend Development: 
    Traditional API => SSR Adminka (Burak)
    Rest API => SPA Burak Project
*/

/* Cookies: 
even request join
self destroyed
*/

/* Validation:
    Frontend validation
    Backend validation
    Database validation
*/
// H - TASK

let a: number[];

function plus(a: number[]) {
    const musbat: number[] = [];
    for (let i = 0; i <=a.length; i++) {
        if(a[i] > 0) {
            musbat.push(a[i]);
        }
    }
    const b =  musbat.toString();
    // const b =  musbat.join("");
    return b;
}

console.log(plus([1, -7, 2, 3, 4, -9, 5, 6, -1, -5]));


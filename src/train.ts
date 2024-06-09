// H2 - TASK

let b: string;

function faqatRaqam(b: string): string {
    const raqam: string[] = [];
    const a = b.split("");
    for( let  i = 0; i <= a.length; i++) {
        if(!isNaN(Number(a[i]))) {
         raqam.push(a[i]);
        }
    }
    return raqam.join("");
}

console.log(faqatRaqam("salom123qalesan?321"));
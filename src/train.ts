function engKopi(a: number[]): number | undefined {
    const b: { [key: number]: number } = {};
  
    for (const num of a) {
      b[num] = (b[num] || 0) + 1;
    }
  
    let c = 0;
    let eng: number | undefined;
  
    for (const key in b) {
      if (b[key] > c) {
        c = b[key];
        eng = Number(key);
      }
    }
  
    return eng;
}
console.log(engKopi([1, 2, 3, 0, 4, 5, 0, 6, 0, 7, 8, 9, 9, 9, 9, 9]));

/*  Project Standards
        - Logging standards
        - Naming standards
            1. function, method, variable => CAMEL
            2. class => PASCAL
            3. folder, file => KEBAB
            4.css => SNAKE
        - Error handling


*/

/*
    Traditinal API
    Rest API
    GraphQL API 
*/
//  MIT TASK - K

function unlilar(str: string): number {
  const unli = 'aeiou';
  let count = 0;

  for (const ele of str.toLowerCase()) {
    if (unli.includes(ele)) {
      count++;
    }
  }

  return count;
}

console.log(unlilar("Salom Dunyo"));


// Output: { this: 1, is: 1, a: 1, sample: 2, sentence: 3, with: 1, many: 1 }
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
    Traditinal API
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
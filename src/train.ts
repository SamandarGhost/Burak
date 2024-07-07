// MIT Task - Q

function findKeyInObj(a: object, b: string): boolean {
    for (let key in a) {
        if (key === b) {
            return true;
        }
      }
        return false;
    }

console.log(findKeyInObj({name: "Sam", age: 12}, "name"));


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
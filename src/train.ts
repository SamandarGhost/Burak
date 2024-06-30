// MIT Taks - O

function faqatRaqamniQosh(a: any[]) {
    let hammasi = 0;
    for (let b = 0; b < a.length; b++) {
      if (typeof a[b] === 'number') {
        hammasi += a[b];
      }
    }
    return hammasi;
  }
  
  console.log(faqatRaqamniQosh([10, "string", true, null, 20]));


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
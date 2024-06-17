// MIT TASK - J

function engUzuni(a: string): string {
  const lugat = a.split(' ');
  let uzuni = '';

  for (const soz of lugat) {
    if (soz.length > uzuni.length) {
      uzuni = soz;
    }
  }
  return uzuni;
}

console.log(engUzuni("Hi I am SAMANDAR and I am 21 years old"));

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
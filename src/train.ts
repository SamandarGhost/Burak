// MIT Task - M
function ikkiKarra(arr: number[]): { [key: number]: number } {
    const count: { [key: number]: number } = {};
    arr.forEach((number) => {
        if (count[number]) {
            count[number]++;
        } else {
            count[number] = 1;
        }
    });

    const kvadrant: { [key: number]: number } = {};
    Object.keys(count).forEach((key) => {
        kvadrant[parseInt(key)] = count[parseInt(key)] * count[parseInt(key)];
    });

    return kvadrant;
}

const son = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(ikkiKarra(son));

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
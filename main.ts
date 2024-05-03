let personName1: string = "umar ali";
console.log(`Hello ${personName1}, would you like to learn some paython today?`);

let personName: string = "Umar Ali";

//in lowercase
console.log("lowercase:", personName .toLowerCase());

//in uppercase
console.log("uppercase:",personName .toUpperCase());

//title case
console.log("titlecase:", personName .replace(/\b\b/g,c=> c.toUpperCase()));

let quote1: string = "A person who never made a mistake never tried anything new.";
let auther: string = "Albert Einstien";

console.log(`${auther} one said, "${quote1}"`);

let quote: string = "A person who never made a mistake never tried anything new.";
let famous_person: string = "Albert Einstien";
let message: string = `${famous_person} Oncesaid,"${quote}"`;
console.log(message);
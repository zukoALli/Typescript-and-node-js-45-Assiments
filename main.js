var personName1 = "umar ali";
console.log("Hello ".concat(personName1, ", would you like to learn some paython today?"));
var personName = "Umar Ali";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//title case
console.log("titlecase:", personName.replace(/\b\b/g, function (c) { return c.toUpperCase(); }));
var quote1 = "A person who never made a mistake never tried anything new.";
var auther = "Albert Einstien";
console.log("".concat(auther, " one said, \"").concat(quote1, "\""));
var quote = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstien";
var message = "".concat(famous_person, " Oncesaid,\"").concat(quote, "\"");
console.log(message);

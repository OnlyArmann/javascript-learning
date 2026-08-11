var product = {
  name: "Ipad",
  price: 17000000,
  category: "electric",
  inStock: true,
};
var categories = ["laptop", "Phone", "Ipad", "Headphone", "Airpod"];

categories.push("sticker");
categories.shift();

var result = categories.indexOf("Gaming", 0);

var backupCategories = categories.slice();

var AllString = categories.join(" | ");

console.log(product);
console.log(categories);
console.log(result);
console.log(backupCategories);
console.log(AllString);

let names = ['Atulyaa', 'pranava', 'vishal', 'ritesh', 'akshay'];

let longNames = names.filter(name => name.length > 6);

console.log(longNames); // Output: ['Atulyaa', 'pranava']





let vowelNames = names.filter(name => {
  let firstChar = name[0].toLowerCase();
  let lastChar = name[name.length - 1].toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(firstChar) &&
         ['a', 'e', 'i', 'o', 'u'].includes(lastChar);
});

console.log(vowelNames); // Output: ['Atulyaa']





let price = [15000, 8000, 9000, 2000];

let finalPrices = price.map(item => {
  let discountedPrice = item * 0.8; // 20% off
  if (discountedPrice > 10000) {
    discountedPrice *= 0.9; // additional 10% off
  }
  return discountedPrice;
});

console.log(finalPrices); 
// Output: [10800, 6400, 7200, 1600]






let nameLengths = names.map(name => name.length);

console.log(nameLengths); 
// Output: [7, 7, 6, 6, 6]
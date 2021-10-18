const nouns = [
  "bush",
  "shovel",
  "cave",
  "mouth",
  "shell",
  "tear",
  "razor",
  "nest",
  "pad",
  "fear",
  "prize",
  "power",
  "pocket",
  "cane",
  "pump",
  "mask",
  "junk",
  "kiss",
  "photo",
  "shower",
  "slide",
  "freedom"
];

// 1. Create a function `handleItem()` that accepts the (JS-created) array `item` (the noun) as a parameter.
let itemString = "";
let index = 0;
const handleItem = function(item) {
  item = item.charAt(0).toUpperCase() + item.substr(1, item.length);
  
  if(index < (nouns.length - 2)) 
  {
    itemString += `${item}, `;
  } 
  else if(index < (nouns.length - 1))
  {
    itemString += `${item} and `;
  }
  else if(index < (nouns.length))
  {
    itemString += `${item}.`;
  }

  index++;
  console.log(item);
  console.log(itemString);
}

nouns.forEach(handleItem);




// 2. Inside `handleItem()`, use `.innerHTML` and the addition assignment operator (`+=`) (or another method of your choice) to create a comma-separated of nouns so that:
//    - the first character of each noun is capitalized;
//    - each noun is separated by a comma;
//    - the last noun is separated by the word `and`.


// 3. Finally, using `Array.forEach()`: invoke `handleItem()` for each item in the noun array to create your comma-separated list.
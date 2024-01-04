const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials
}


//a function to capitalize the first letter which is index 0
//after capitalizing the letter it adds the remaing letters from ndex one to the end.
function upperCase(word){
  return word.charAt(0).toUpperCase()+ word.slice(1);
  };

//a function that capitalizes each letter
//this function takes tutorial as its argument
function titleCasingOne(tutorial){
  return tutorial
  //first split the array or sentence into words so as to iterate every word.
    .split(' ')
    //capitalize
    .map(upperCase)
    //after capitalizing the words are now joined to form one array or a sentence
    .join(' ');
}
//use the titleCasingOne function to titlecase the other arrays or sentences of the Object.
function titleCasingAll(tutorials){
  return tutorials.map(titleCasingOne);
}
const titleCasedArray=titleCasingAll(tutorials);
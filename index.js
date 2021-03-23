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


function titleCased(){
  let newTutorials = tutorials.map(tutorial => {
    let sentence = tutorial.split(" ")
    let newSentence = sentence.map(word => {
      return(word.charAt(0).toUpperCase() + word.slice(1))
    })
    return(newSentence.join(" "))
  })
  return newTutorials
}


// function titleCased(){
//   let newTutorials = tutorials.map(tutorial => {
//     let sentence = tutorial.split(" ");
//     sentence.forEach(word => word.charAt(0).toUpperCase() + word.slice(1));
//     sentence.join(" ");
//     return sentence;
//   })
//   return newTutorials;
// }

// const titleCased = tutorials.map(tutorial => {
//   return(tutorial.charAt(0).toUpperCase() + tutorial.slice(1))
// })

// console.log(titleCased)
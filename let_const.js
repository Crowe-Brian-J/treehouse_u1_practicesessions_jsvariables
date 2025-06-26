//1) 	Write the code for function addNewTeachers() found on line 35. This function should receive parameter newTeachers, defined on line 52, and add the new teachers to the `teachers` variable.
//2)	Find function printTreehouseSummary(). There is something you need to fix in this function so the console.log() on the final line of the function outputs the correct number of JavaScript courses and teachers.
//3)	At this point, attempt to run your code by typing node let_const.js in your workspace console and hitting enter. You should receive an error message when you do this. Use the clues in this error message to fix the program so it runs.
//declare variables as instruction described
const teachers = [
  {
    name: 'Ashley',
    topicArea: 'Javascript'
  }
]
const courses = [
  'Introducing JavaScript',
  'JavaScript Basics',
  'JavaScript Loops, Arrays and Objects',
  'Getting Started with ES2015',
  'JavaScript and the DOM',
  'DOM Scripting By Example'
]
let newTeachers = [
  {
    name: 'James',
    topicArea: 'Javascript'
  },
  {
    name: 'Treasure',
    topicArea: 'Javascript'
  }
]

//declare functions to do job
const addNewTeachers = (newTs) => {
  // TODO: write a function that adds new teachers to the teachers array
  for (let i = 0; i < newTs.length; i++) {
    teachers.push(newTs[i])
  }
  for (let i = 0; i < teachers.length; i++) {
    console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`)
  }
}

const printTreehouseSummary = () => {
  // TODO: fix this function so that it prints the correct number of courses and   teachers
  console.log(
    `Treehouse has ${courses.length} JavaScript courses, and ${teachers.length} Javascript teachers`
  )
}

//create logs
addNewTeachers(newTeachers)
printTreehouseSummary()

//None of the instructions here made much sense. It also looks like this hasn't been updated in a very long time. I updated the code to look more like standards now. I feel like I missed the point of something here because while I understand that I needed to reorder variables and functions, this doesn't seem like an exercise that would tested my ability to use let and const, but more in refactoring the given code.

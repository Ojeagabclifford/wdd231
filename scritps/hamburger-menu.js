


const mainnav = document.querySelector('.navs')
const hambutton = document.querySelector('#meun');



hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

});

// date and time

const currentYear = document.querySelector('#currentyear');
const today = new Date();
currentYear.innerHTML= new Intl.DateTimeFormat('en-US',{
    dateStyle:"medium"
}).format(today);


//course List
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const cse = courses.filter(courses=>{
    const ces1 = (courses.subject == "CSE")
    return ces1;
})

const wdd = courses.filter(courses=>{
    const wdd1 = (courses.subject == "WDD")
    return wdd1;
})

const news = courses;

const cousreTable = document.querySelector('#course-container');

function displayCourse(cousreAreay){
     let numbercreideit = 0;
    const cousreTable = document.getElementById('course-container');
    cousreTable.innerHTML ='';
    
    
    cousreAreay.forEach(courses => {
        // iif
        if(courses.completed){
            
            const templeCard = document.createElement('div');
            templeCard.className ='container';
            templeCard.innerHTML = `<div class='more-d-container' >
            <h3>${courses.subject} ${courses.number}</h3>`


        cousreTable.appendChild(templeCard);}
        else{
            const templeCard = document.createElement('div');
            templeCard.className ='container';
            templeCard.innerHTML = `<div class='more-d' >
            <h3>${courses.subject} ${courses.number}</h3>`
            cousreTable.appendChild(templeCard);


        }
        numbercreideit +=courses.credits;
        
    });
    const num = document.querySelector('.pp');
    num.innerHTML = `The total number of course below is: ${numbercreideit}`;
}

document.getElementById('all-course').addEventListener('click', (Event)=>{
    Event.preventDefault();
    displayCourse(news);


});

document.getElementById('wdd-course').addEventListener('click', (Event)=>{
    Event.preventDefault();
    displayCourse(wdd);


});

document.getElementById('cse-course').addEventListener('click', (Event)=>{
    Event.preventDefault();
    displayCourse(cse);


});

displayCourse(news);



const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);


    
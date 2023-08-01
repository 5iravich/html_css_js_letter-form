const title = document.querySelector("title").textContent;
const sender = document.querySelector(".sender-column strong").textContent;
// alert("The title is " + title);
// alert("The Sender is "+ sender);

const newTitle = "Letter from Potter 🧙"
document.querySelector('title').textContent = newTitle;

const newSubject = "Re: Hermione Granger's Application to Hogwarts School 📲"
document.querySelector('.subject').textContent = newSubject;

var addittionalText = document.createTextNode("to a 😺");
var subjectElement = document.querySelector(".subject");
subjectElement.appendChild(addittionalText);

const newParagraph = document.createElement("p");
newParagraph.textContent = "Thank you for your continued interest in Hagwarts School of Witchcraft and Wizzardy 🧙🏼‍♂️."

document.querySelector(".body").appendChild(newParagraph);

document.body.style.backgroundColor = "lightblue";
subjectElement.style.fontWeight = "bold";
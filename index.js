// Write your code here!

// let element = document.createElement('div') 

let element = document.createElement('div');
document.body.appendChild(element);

// document.body.appendChild(element);
let ul = document.createElement('ul')
// let ul = document.createElement('ul')
for (let i = 0; i < 3; i++){
    let li = document.createElement('li')
    li.innerHTML = (i + 1).toString()
    ul.appendChild(li)
}

element.appendChild(ul);


// for (let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = (i + 1).toString()
//     ul.appendChild(li)
// }

// element.appendChild(ul);

element.style.textAlign = 'center';
ul.style.textAlign = 'left'; 

element.style.backgroundColor = '#27647B';

ul.removeChild(ul.querySelector('li:nth-child(2)'))
ul.remove()
// document.getElementById('main').remove();

// var newHeader = document.createElement('h1');

// newHeader.setAttribute("id", "victory");

// newHeader.innerHTML = "BEN is the champion";

// document.body.appendChild(newHeader);

document.getElementById('main').remove()

const newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")

const name = "Ben"
newHeader.innerHTML = `${name} is the champion`
function allowDrop(ev) {
  ev.preventDefault();
  // let score = score + 1

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // let score = score + 1
}

let score = 0

const button = document.querySelector('#done')
const greeting = document.querySelector('#greeting')
const input = document.querySelector('input')


button.addEventListener('click', (e) => {
  greeting.innerHTML = "<h6>nice job</h6>"

})

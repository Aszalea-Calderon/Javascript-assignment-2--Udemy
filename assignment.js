const task3Element = document.getElementById("task-3");
const task4Element = document.getElementById("task-4");
task3Element.addEventListener("click", one);
task4Element.addEventListener("mouseover", con);

function one() {
  alert("text of your choice");
}

function peach(name) {
  alert(`This is from the function called name. The name is ${name}`);
}
function concat(s1, s2, s3) {
  return alert(s1 + s2 + s3);
}
concat("i", "heart", "you");

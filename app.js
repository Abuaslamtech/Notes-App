//declare variables
const title = document.getElementById("title");
const note = document.getElementById("note");
const btn = document.getElementById("btn");
const Ynotes = document.getElementById("Ynotes");

//get notes
function getNotes() {
  Ynotes.classList.remove("hide");
  //get notes
  const notes = document.getElementById("notes");

  //create div element
  const div = document.createElement("div");
  div.className = "container";

  //create title div
  const titleDiv = document.createElement("div");
  titleDiv.className = "titleDiv";
  titleDiv.innerHTML = title.value;

  //create message div
  const msgDiv = document.createElement("div");
  msgDiv.className = "msgDiv";
  msgDiv.innerHTML = note.value;
  //append
  div.appendChild(titleDiv);
  div.appendChild(msgDiv);
  notes.appendChild(div);

  title.value = "";
  note.value = "";
}
btn.addEventListener("click", getNotes);

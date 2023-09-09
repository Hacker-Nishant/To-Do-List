const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-Container")


function addTask() {
  if (inputBox.value === '') {
    alert("You must Write Something!")
  }
  else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = ""
  saveData()
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    saveData()
  }
}, false)

//------------REFRESH || BROWSER CLOSED -----------------//
//       Then data will not lost by doing this   //


//(setItem)->list container me sara element aa jayega with name 'data'
// internal memory me store hoga 'data'(list items)
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

//(getItem)-> list comtainer me jo bhi data store hai usko
// show krega (when again we open the browese)
function ShowTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}
ShowTask()

// last me call hoga show task? //


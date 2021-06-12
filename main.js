let editButton = document.getElementById('edits')

editButton.addEventListener('click', () => {
  makeEdits()
})

let makeEdits = () => {

  let newValue = document.getElementById("values")
  let valueList = newValue.children
  newValue.removeChild(valueList[0])

  document.getElementById("featuredSlogan").textContent = "Your safe interplanetary travel choice" 
  document.body.style.backgroundColor = "#ff88ee"
}

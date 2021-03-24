// set default variables
age = 0
// event listener
document.getElementById('button').addEventListener('click', agecheck)
// age chercker
function agecheck () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age > 17) {
    document.getElementById('output').innerHTML = 'you can watch R, PG-13, PG and G rated movies'
  } else if (age > 13) {
    document.getElementById('output').innerHTML = 'you can watch PG-13, PG and G rated movies'
  } else if (age > 5) {
    document.getElementById('output').innerHTML = 'you can watch PG or G rated movies'
  } else {
    document.getElementById('output').innerHTML = 'you cant watch eny movies alone'
  }
  document.getElementById('thank').innerHTML = 'thank you for confirming your age'
}

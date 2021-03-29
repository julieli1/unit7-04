// this links the button to the checking
document.getElementById('check').addEventListener('click', check)

// set everything to 0
let age = 0
let weekday = 0

// this is what checks if you can get the discount
function check () {
  age = document.getElementById('age').value
  weekday = document.getElementById('weekday').value
  if ((weekday === 'Tuesday' || weekday === 'Thursday') || (age >= 14 && age <= 21)) {
    document.getElementById('answer').innerHTML = ('you get the discount')
  } else {
    document.getElementById('answer').innerHTML = ("you don't get the discount")
  }
}

const robotName = document.getElementById('robotName')
const robotDisplay = document.getElementById('robotDisplay')

function addRobot(){
  if(robotName.value !== ''){
    let newRobot = document.createElement('img')
    newRobot.src = `https://robohash.org/${robotName.value}`
    robotDisplay.appendChild(newRobot)
    robotName.value = ''
  }
  
}
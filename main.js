const robotName = document.getElementById('robotName')
const robotDisplay = document.getElementById('robot-display')

function addRobot(){
  if(robotName.value !== ''){
    let newRobot = document.createElement('img')
    newRobot.src = `https://robohash.org/${robotName.value}`
    newRobot.className = 'robot'
    newRobot.alt = `Robot Named ${robotName.value}`
    robotDisplay.appendChild(newRobot)
    robotName.value = ''
  }
  
}
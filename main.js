const robotName = document.getElementById('robotName')
const robotDisplay = document.getElementById('robot-display')

function addRobot(){
  if(robotName.value !== ''){
    let robotBlock = document.createElement('div');
    robotBlock.className = 'robot'

    let newRobot = document.createElement('img')
    newRobot.src = `https://robohash.org/${robotName.value}`
    newRobot.alt = `Robot Named ${robotName.value}`

    let newRobotDescription = document.createElement('p')
    newRobotDescription.innerHTML = `A robot called ${robotName.value}`

    robotBlock.appendChild(newRobot)
    robotBlock.appendChild(newRobotDescription)
    robotDisplay.appendChild(robotBlock)
    
    robotName.value = ''
  }
  
}
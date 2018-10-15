const addPlayer = function(name, team, position){
  const wrapper = document.createElement('div')
  const nameElement = document.createElement('h2')
  nameElement.textContent = name
  const teamElement = document.createElement('p')
  teamElement.textContent = team
  const positionElement = document.createElement('p')
  positionElement.textContent = position

  wrapper.appendChild(nameElement)
  wrapper.appendChild(teamElement)
  wrapper.appendChild(positionElement)

  const playerList = document.querySelector('#end-form')
  playerList.appendChild(wrapper)

}

document.addEventListener('DOMContentLoaded', () => {
  const handleFormSubmit = function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const team = event.target.team.value;
    const position = event.target.position.value;

    addPlayer(name, team, position);

    const form = event.target
    form.reset()

  }

  const handleDeleteButton = function (event){
    const playerList = document.querySelector('#end-form');
    while (playerList.firstChild){
      playerList.removeChild(playerList.firstChild)
    }
  }





  const form = document.querySelector('#start-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#deleteAll')
  deleteButton.addEventListener('click', handleDeleteButton)
});

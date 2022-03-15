// console.log('sports')
const searchPlayer = () => {
    // console.log('rafsan')
    const serachField = document.getElementById('input-player');
    const searchText = serachField.value;
    console.log(searchText);
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayerResult(data.player))
    // .then(data => console.log(data))
    /* {player: Array(4)}
                    player: (4) [{…}, {…}, {…}, {…}]
                    [[Prototype]]: Object */
}

const displayPlayerResult = (players) => {
    // console.log(players);/* (4) [{…}, {…}, {…}, {…}] */
    const serachResult = document.getElementById('search-result')
    for (const player of players) {
        console.log(player);/* {idPlayer: '34146370', idTeam: '133714', idTeam2: '134509', idTeamNational: null, idSoccerXML: '131', …} */

        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div>
            <img src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Name:${player.strPlayer}</h4>
                <p class="card-text">
                  ${player.strDescriptionIT.slice(0, 50)}  
                </p>
                <div>
                    <button class="btn btn-danger">Delete</button>
                    <button onClick="detail('${player.idPlayer}')" class="btn btn-success">Details</button>
                </div>

            </div> 
        </div>
    
        `;
        serachResult.appendChild(div);
    }

}

const detail = (id) => {
    console.log('hello id', id)
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]))
    // .then(data => console.log(data))
    /* {players: Array(1)}
                    players: [{…}] */
}

const setDetails = (info) => {
    console.log('player info', info)
    /*  if (info.strGender == "male") {
         document.getElementById('male').style.display = "block"
         document.getElementById('female').style.display = "none"
     }
     else {
         document.getElementById('male').style.display = "none"
         document.getElementById('female').style.display = "block"
     } */
    /* {idPlayer: '34146370', idTeam: '133714', idTeam2: '134509', idTeamNational: null, idSoccerXML: '131', …} */
    const detailContainer = document.getElementById('detail-container')
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
        
        <h4>Name:${info.strPlayer}</h4>
        <h4>Gender:${info.strGender}</h4>
        <h4>ID:${info.idPlayer}</h4>
    </div>
    `;
    detailContainer.appendChild(div)
}
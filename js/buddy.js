// console.log('click buddy')
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data))

}
loadBuddies();

const displayBuddies = data => {
    console.log(data)
    console.log(data.results)
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy)
        console.log(buddy.email)
        console.log(buddy.name.first)
        const paragraph = document.createElement('p');
        paragraph.innerText = `Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email:${buddy.email}`;
        buddiesContainer.appendChild(paragraph);
    }


    /* for (const buddy of Object.keys(data)) {
        console.log(buddy.results);
    } */
}


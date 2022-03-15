// console.log('click')
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    /*  for (const country of countries) {
         console.log(country)
     } */
    const countriesDiv = document.getElementById('countries')

    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')

        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>

            <button class="button" onClick="loadCountryByName('${country.name.common}')">Details</button>
        `

        /* const h3 = document.createElement('h3')
        h3.innerText = country.name;
        div.appendChild(h3);

        const paragraph = document.createElement('p')
        paragraph.innerText = country.capital
        div.appendChild(paragraph); */

        countriesDiv.appendChild(div);

    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name} `
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0].name, data[0].population, data[0].flags));
    // .then(data => console.log(data));/* output==  [{…}] */
}

const displayCountryDetail = (country, population, flag) => {
    console.log(country, population, flag)
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h5>${country.common}</h5>
    <p>population:${population}</p>
    <img src="${flag.png}">`
}
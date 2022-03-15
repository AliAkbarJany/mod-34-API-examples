// console.log('practice meal')

const serachFood = () => {
    const serachfield = document.getElementById('serach-field');
    const serachText = serachfield.value;
    console.log(serachText);
    // clear data
    serachfield.value = "";

    if (serachText == '') {
        console.log('please right something to display')
    }
    else {
        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachText}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))

        // .then(data => console.log(data))
        /* output== 
        {meals: Array(9)}
            meals: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            [[Prototype]]: Object
        */
    }

}

const displaySearchResult = meals => {
    console.log(meals);/* output= (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] */
    const serachResult = document.getElementById('serach-result');
    serachResult.textContent = '';
    // serachResult.innerHTML = '';
    /* if (meals.lenght == 0) {
        console.log('no result found');
    } */

    meals.forEach(meal => {
        console.log(meal);/* output== {idMeal: '52802', strMeal: 'Fish pie', strDrinkAlternate: null, strCategory: 'Seafood', strArea: 'British', …}   ai gila 9 ta loop chalia 9 bar nibe */
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onClick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            </div>
        </div>
        `;
        serachResult.appendChild(div);
    });
}

const loadMealDetail = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetai(data.meals[0]));
    // .then(data => console.log(data))
    /* output== {meals: Array(1)}
                    meals: Array(1)
                        0: {idMeal: '52802', strMeal: 'Fish pie', strDrinkAlternate: null, strCategory: 'Seafood', strArea: 'British', …}*/

}

const displayMealDetai = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)} </p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}


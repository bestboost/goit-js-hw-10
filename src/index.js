import './css/styles.css';

import {fetchCountries} from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputCountryName = document.querySelector('#search-box');

inputCountryName.addEventListener('input', _.debounce(inputFromUser, DEBOUNCE_DELAY))

function inputFromUser (event) {
    const userData = event.currentTarget.value
    console.log(userData)
}

// countriesList()
// function countriesList(country) {
//     const list = `<div class="countries-list"> 
//     <img class="country-image" src="${country.flags.svg}" alt="flag" widht="150px" height ="50px">
//     <h1 class="country-name">${country.name.official}</h1>
//     </div>`;
// }

// cardOfCountry ();
 
// function cardOfCountry (country) {
//     const markup = ` <div class="country-card">
//          <div class="country-head">
//          <img class="country-image" src="${country.flags.svg}" alt="flag" widht="150px" height ="50px">
//          <h1 class="country-name">${country.name.official}</h1>
//          </div>
//    <div class="country-information">
//    <b>Capital:</b>
//    <p>${country.capital}</p>
//    <b>Population</b>
//    <p>${country.population}</p>
//    <b>Lenguages:</b>
//    <p>${country.languages}</p>
//    </div>
//    </div>`;
  
//     countryInfo.innerHTML = '';
//     countriesList.innerHTML = markup;
// }
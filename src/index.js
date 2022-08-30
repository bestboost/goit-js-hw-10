import debounce from 'lodash.debounce';
import './css/styles.css';

import {fetchCountries} from './fetchCountries';

let inputData = '';
const DEBOUNCE_DELAY = 300;
const inputCountryName = document.querySelector('#search-box');

inputCountryName.addEventListener('input', debounce(inputFromUser, 300))

function inputFromUser (evt) {
    inputData = evt.target.value
    console.log(inputData)
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
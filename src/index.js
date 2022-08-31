import debounce from 'lodash.debounce';
import './css/styles.css';

import {fetchCountries} from './fetchCountries';

let inputData = '';
const DEBOUNCE_DELAY = 300;

const inputCountryName = document.querySelector('#search-box');

inputCountryName.addEventListener('input', inputFromUser)

function inputFromUser (evt) {
    inputData = evt.target.value
    
    console.log(inputData)

fetchCountries(inputData)
// .then(cardOfCountry)
}


// countriesList()
// function countriesList(country) {
//     const list = `<div class="countries-list"> 
//     <img class="country-image" src="${country.flags.svg}" alt="flag" widht="150px" height ="50px">
//     <h1 class="country-name">${country.name.official}</h1>
//     </div>`;
// }


 
// function cardOfCountry (name) {
//     const markup = ` <div class="country-card">
//          <div class="country-head">
//          <img class="country-image" src="${name.flags.svg}" alt="flag" widht="150px" height ="50px">
//          <h1 class="country-name">${name.name.official}</h1>
//          </div>
//    <div class="country-information">
//    <b>Capital:</b>
//    <p>${name.capital}</p>
//    <b>Population</b>
//    <p>${name.population}</p>
//    <b>Lenguages:</b>
//    <p>${name.languages}</p>
//    </div>
//    </div>`;
  
//     // countryInfo.innerHTML = '';
//     cardOfCountry.innerHTML = markup;
// }
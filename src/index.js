import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import {fetchCountries} from './fetchCountries';

let inputData = '';
const DEBOUNCE_DELAY = 300;

const inputCountryName = document.querySelector('#search-box');
const countryListContainer = document.querySelector('.country-list');
// const countryInfoContainer = document.querySelector('.country-info');

inputCountryName.addEventListener('input', debounce(inputFromUser, DEBOUNCE_DELAY))

function inputFromUser (evt) {
    inputData = evt.target.value
    
    console.log(inputData)

fetchCountries(inputData)
.then (renderCountryCard)         
.catch(error => console.log(error));
}


function renderCountryCard(name) {
    console.log('country', name)
      const markup = countriesList(name);
      countriesList.innerHTML = markup;
}

 // function countriesList(name) {
            // const flag = name.flags;
            // const countryName = name.name.official;
                        
            // list = `<div class="countries-list"> 
            // <img class="country-image" src="https://flagcdn.com/w320/pe.png" alt="flag" height ="50px">
            // <h1 class="country-name">${name.official}</h1>
            // </div>`;        
  
        // }


// function cardOfCountry (name) {
//     const flag = name.flags;
//     const countryName = name.name.official;
//     const capital = name.capital;
//     const population = name.population;
//     const languages = Object.values(name.languages).join(', ')

//     const markup = ` <div class="country-card">
//              <div class="country-head">
//              <img class="country-image" src="https://flagcdn.com/${flag}.svg" alt="flag" widht="150px" height ="50px">
//              <h1 class="country-name">${countryName}</h1>
//              </div>
//        <div class="country-information">
//        <b>Capital:</b>
//        <p>${name.capital}</p>
//        <b>Population</b>
//        <p>${name.population}</p>
//        <b>Lenguages:</b>
//        <p>${name.languages}</p>
//        </div>
//        </div>`;
      
//     countryInfoContainer.innerHTML = markup;
// }


function countriesList(name) {
    // `<div class="countries-list"> 
    // <img class="country-image" src="https://flagcdn.com/pe.svg" alt="flag" widht="150px" height ="50px">
    // <h1 class="country-name">${name.name.official}</h1>
    // </div>`;  
}

 
// function cardOfCountry (name) {
//     const markup = ` <div class="country-card">
//          <div class="country-head">
//          <img class="country-image" src=${name.flags.svg} alt="flag" widht="150px" height ="50px">
//          <h1 class="country-name">${name.official}</h1>
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
  
//     countriesList.innerHTML = '';
//     cardOfCountry.innerHTML = markup;
// }
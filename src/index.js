import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import {fetchCountries} from './fetchCountries';
import card from './templates/card.hbs';
import list from './templates/list.hbs';

let inputData = '';
const DEBOUNCE_DELAY = 300;

const inputCountryName = document.querySelector('#search-box');
const countryListContainer = document.querySelector('.country-list');
const countryInfoContainer = document.querySelector('.country-info');

inputCountryName.addEventListener('input', debounce(inputFromUser, DEBOUNCE_DELAY))

function inputFromUser (evt) {
    inputData = evt.target.value.trim();

    if (!inputData) {
        countryListContainer.innerHTML = '';
        countryInfoContainer.innerHTML = '';
           return;
      }
   

fetchCountries(inputData)
.then (renderList);         

fetchCountries(inputData)
.then (renderCountryCard);         

}



function renderList(name) {
    const listMarkup = list(name)
   
    if (name.length >= 10) {
        Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
    } else if (name.length >= 2 || name.length <= 9) {
      countryListContainer.innerHTML = listMarkup;

    } 
    
}

function renderCountryCard(name) {
       const markup = card(name) 
      
      if (name.length === 1) {
      
      countryListContainer.innerHTML = '';
      countryInfoContainer.innerHTML = markup;
      }
}


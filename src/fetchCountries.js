export {fetchCountries};
import Notiflix from 'notiflix';

function fetchCountries(name) {
 
 return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages`)
.then (response => {
          
          if (!response.ok) {
            throw new Error (Notiflix.Notify.failure("Oops, there is no country with that name"));
          }
          return response.json()
               
        }).catch(error => console.log(error));
    };
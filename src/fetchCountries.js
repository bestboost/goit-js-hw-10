export {fetchCountries};

function fetchCountries(name) {
 return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,flags.svg,capital,population,languages`)
.then (response => {
          return response.json()
      
        })
     
    };
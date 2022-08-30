export {fetchCountries};

fetchCountries()

function fetchCountries(name) { fetch('https://restcountries.com/v3.1/name/united')
.then (response => {
          return response.json()
        })
        .then (countries => {
            console.log(countries)})
        .catch(error => {
                console.log(error)
            });

        };
export {fetchCountries};

function fetchCountries(name) {
 return fetch(`https://restcountries.com/v3.1/name/${name}`)
.then (response => {
          return response.json()
        })
        .then (name => {
            console.log(name)})
        .catch(error => {
                console.log(error)
            });

        };
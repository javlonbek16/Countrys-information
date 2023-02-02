let content = document.querySelector(".content");
let searchBtn = document.querySelector("#search");
let searchInput = document.querySelector("#countryInput");


searchBtn.addEventListener("click", () => {
    let countryName = searchInput.value.trim();
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(url,
    )
        .then((response) => response.json())
        .then((response) => {
            // console.log(response);
            // console.log();
            content.innerHTML = `
            <img src="${response[0].flags.svg}" class="flag-img">
            <h2>${response[0].name.common}</h2>

        <div class="wrapper">
               <div class="data-wrapper"> 
            <h4>Capital:</h4>
            <span> ${response[0].capital[0]}</sapn>
               </div>
        </div>

        <div class="wrapper">
        <div  class="data-wrapper"> 
     <h4>Continent:</h4>
     <span> ${response[0].continents[0]}</sapn>
        </div>
 </div>

     <div class="wrapper">
        <div  class="data-wrapper"> 
     <h4>Population:</h4>
     <span> ${response[0].population}</sapn>
        </div>
 </div>

 <div class="wrapper">
 <div  class="data-wrapper"> 
<h4>Currency:</h4>
<span> 
 ${Object.keys(response[0].currencies)}</sapn>
 </div>
</div>    


 <div class="wrapper">
 <div  class="data-wrapper"> 
<h4>Common language:</h4>
<span> ${Object.values(response[0].languages)
                    .toString(",")
                    .split(",")
                    .join(",")}</sapn>
 </div>
</div> 

 `

        })
        .catch((err) => {
            if (countryName.length == 0) {
                content.innerHTML = ` <h3>The input field cannot be empty</h3>`
            } else {
                content.innerHTML = `<h3>Please enter a valid  country name.</h3> `
            }
            console.log(err);
        });
});


// console.log('https://restcountries.com/v3.1/name/India?fullText=true');
// a. Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    let out = result.filter((d)=>{
        return d.region === 'Asia'
    })
    console.log(out)      // <= results for countries from the Asia continent /region using the Filter function
}

//---------------------------------------------------------------------------------------------------------------------

// b. Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    let out = result.filter((d)=>{
        return d.population < 200000
    })
    console.log(out)
}

//---------------------------------------------------------------------------------------------------------------------

// c. Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    let out = result.forEach((element)=>{
        for (let key in result){
            console.log(`
            Name: ${result[key].name.common}
            // Capital: ${result[key].capital}
            // Flag: ${result[key].flag}`)
        }           
    })

}
      
//-----------------------------------------------------------------------------------------------------------------------

// d. Print the total population of countries using reduce function

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    let out = result.reduce((prev,curr)=>{
        return prev+curr.population
    },0)
    console.log(out)     
}

//------------------------------------------------------------------------------------------------------------------------

// e. Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    for(let i=0; i<result.length; i++){
        if(result[i].currencies === "USD"){
              console.log(result[i].name)
        }
    }     
}
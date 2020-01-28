fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/')
.then(result =>{
    console.log(result);
    return  result.json();
    
})
.then(data =>{

    const  today = data.consolidated_weather[0];

    console.log(`temperature in ${data.titel}stay between ${today.min_temp} and ${today.max_temp}`);
    
})
.catch(error =>{
    console.log(error);
    
})
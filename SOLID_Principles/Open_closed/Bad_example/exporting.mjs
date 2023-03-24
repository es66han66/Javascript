var cities = ["lucknow", "noida"]

var citySelect = {
    selectCity(city) {
        if(cities.includes(city)){
            console.log("Your city exists")
        } else {
            console.log("Your city doesn't exist")
        }
    }
}

export { citySelect }


// const allCars = [
//     {
//         model: "Mustang",
//         color: "Midnight Blue",
//         year: 1976,
//         length: 120,
//         width: 62,
//         height: 47
//     },
//     {
//         model: "Xterra",
//         color: "Forest Green",
//         year: 2011,
//         length: 144,
//         width: 71,
//         height: 55
//     },
//     {
//         model: "Thunderbird",
//         color: "Red",
//         year: 2005,
//         length: 115,
//         width: 58,
//         height: 42
//     },
//     {
//         model: "Suburban",
//         color: "Grey",
//         year: 2015,
//         length: 149,
//         width: 73,
//         height: 58
//     }
// ]


const outputElement = document.querySelector("#app")



// const firstCar = allCars[0]

// Displaying all of the object keys on the DOM

// outputElement.innerHTML += "<h1>Properties</h1>"
// for (const key of Object.keys(firstCar)) {
//     outputElement.innerHTML += `<div>${key}</div>`
// }

// Displaying all of the values for each car on the DOM

// allCars.forEach(car => {


//     for (const value of Object.values(car)) {
//         outputElement.innerHTML += `<div>${value}</div>`
//     }
// })

// Using Object.entries to display all of the key value pairs on the DOM

// outputElement.innerHTML += "<h1>Car List</h1>"

// allCars.forEach(car => {
//     outputElement.innerHTML += "<hr/>"

//     for (const entry of Object.entries(car)) {
//         outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
//     }
// })


// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"


// const docBill = 
//     {
//     officeName: "Berry Hill Animal Hospital",
//     streetAddress: "100 8th Avenue South",
//     doctorName: "Dr. Kirkpatrick",
//     patientName: "Hank",
//     visitDate: "10/31/2019",
//     amountBilled: "$134.67",
//     dueDate: "11/15/2019"
// }


// console.log(docBill[dateVisited])
// console.log(docBill[owed])
// console.log(docBill[patient])

// for (const value of Object.values(docBill)) {
//     console.log(value)
// }

// for (const key of Object.keys(docBill)) {
//     outputElement.innerHTML += `<span> ${key} </span>`
// }





const favoriteDinner = {
    name : "Pork Belly Burnt End Tacos",
    prepTime: "3 hours",
    meatMethod: "Smoked",
    tortillaType: "flour",
    topping1: "Smoked Corn Pico",
    topping2: "Cilantro",
    topping3: "Cotija cheese",
    drink: "Margarita"
}

for (const entry of Object.entries(favoriteDinner)) {
    outputElement.innerHTML += `<article class="food">${entry[0]}: ${entry[1]}</article>`
}


var sum = items.reduce((a, b) => a + b.price, 0)
var sumdiv= sum / items.length
document.querySelector("#answer1").innerHTML = `The sum of all prices is $${sumdiv.toFixed(2)}`


/////////////////////////////////////
//QUESTION 2
var arr = []
var between = items.filter(function(items){
    if(items.price > 14.00 && items.price< 18.00){
        arr.push(items.title)
    }
})
var joined = arr.join("\n")
document.querySelector("#answer2").innerHTML = `${joined}`


///////////////////////
// QUESTION 3
var name =[]
var currency = items.filter(function(arr){
    if(arr.currency_code === "GBP"){
        return arr;
    }
})
console.log(currency[0]["currency_code"])
document.querySelector("#answer3").innerHTML = `${currency[0]["title"]} costs &#65505;${currency[0]["price"]}`

/////////////////////
// QUESTION 4
var woodItems =[]
var wood = items.filter(function(arr){
    if(arr.materials.includes("wood")){
        woodItems.push(arr.title)
    }
})
var joinedWood = woodItems.join('\n')
document.querySelector("#answer4").innerHTML = `${joinedWood}`

//////////////////
//QUESTION 5

var more8 = items.filter(function(arr){
     return arr.materials.length >= 8
         
})

console.log(more8);
yes8string =""
more8.forEach(function(arr){
    console.log(arr)
    yes8string+= arr.title + " has "+ arr.materials.length +" materials: \n";
    yes8string+= arr.materials.join('\n') 
    yes8string+= '\n\n'
})

document.querySelector("#answer5").innerHTML = `${yes8string}`
////////////////////////
//QUESTION 6
var thisMany = []
var howMany = items.filter(function(arr){
    if(arr.who_made === "i_did"){
        thisMany.push(arr)
    }
})

document.querySelector("#answer6").innerHTML = `${thisMany.length} were made by their sellers`

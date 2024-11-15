// reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0) 
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "shirt",
        price: 2000
    },
    {
        itemName: "pant",
        price: 2500
    },
    {
        itemName: "tshirt",
        price: 1000
    },
    {
        itemName: "jacket",
        price: 4000
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);

//app array
const appetizers = [
    {   name: 'mozzarella sticks',
        price: 9.99,
        isVegetarian: true
    },
    {
        name: 'buffalo wings',
        price: 9.99,
        isVegetarian: false
    },
    {
        name: 'nachos',
        price: 9.99,
        isVegetarian: false
    }    
]


const getAppetizers = (req, res) => {
    res.send(appetizers)
}

const getAppetizer = (req, res) => {
    res.send(appetizers[req.params.id])
}

module.exports = {
    getAppetizers,
    getAppetizer
}

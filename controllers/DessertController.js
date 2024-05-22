const desserts = [
    {   name: 'brownie',
        price: 9.99,
        isVegetarian: true
    },
    {
        name: 'apple pie',
        price: 9.99,
        isVegetarian: true
    },
    {
        name: 'tiramisu',
        price: 9.99,
        isVegetarian: true
    }
]


const getDesserts = (req, res) => {
    res.send(desserts)
}

const getDessert = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessert
}
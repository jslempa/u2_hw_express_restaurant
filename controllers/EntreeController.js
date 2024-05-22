const entrees = [
    {   name: 'cheeseburger',
        price: 15.99,
        isVegetarian: false
    },
    {
        name: 'veggie burger',
        price: 15.99,
        isVegetarian: true
    },
    {
        name: 'chicken parmesan',
        price: 15.99,
        isVegetarian: false
    }
]


const getEntrees = (req, res) => {
    res.send(entrees)
}

const getEntree = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntree
}
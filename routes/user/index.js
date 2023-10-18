const express = require('express');
const router = express.Router();

const users = [
    {
        'id': 1,
        'first_name': 'Juan',
        'last_name': 'Henríquez',
        'edad': 26
    },
    {
        'id': 2,
        'first_name': 'Pedro',
        'last_name': 'Segura',
        'edad': 35
    },
];

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter(user => user['id'] === id);
    res.send(user);
});

router.get('/mayores/:edad', (req, res) => {
    const age = parseInt(req.params.edad);
    const filteredUsers = users.filter(user => user['edad'] >= age);
    const newFilteredUsers = filteredUsers.map(user => {
        return {
            'name': `${user['first_name']} ${user['last_name']}`,
            'age': user['edad'],
        }
    });
    res.send(newFilteredUsers);
});

module.exports = router
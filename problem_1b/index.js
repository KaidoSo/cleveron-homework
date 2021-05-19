/*
Create a function named "func" that takes data from this
structure [ { id, name, description }, ... ] and returns into this structure { id:
{ name, description }, ... } (5p)
[ { id: 1, name: 'one', description: 'number one' }, { id: 3, name: 'three', description:
'number three' }, { id: 6, name: 'six', description: 'number six' } ]
--------------------------------------------------------------------------------------------------
{ 1: { name: 'one', description: 'number one' }, 3: { name: 'three', description:
'number three' }, 6: { name: 'six', description: 'number six' } }
*/

const users = [
    {
        id: 1,
        name: 'one',
        description: 'number one'
    },
    {
        id: 2,
        name: 'two',
        description: 'number two'
    },
    {
        id: 3,
        name: 'three',
        description: 'number three'
    },
    {
        id: 6,
        name: 'six',
        description: 'number six'
    },
]

// using regular function and for loop
const usersMap = {};
let func = function(){
    for(let user of users) {
        usersMap[user.id] = { name: user.name, description: user.description };
    }
    return usersMap
};
console.log(func());

// using arrow function and reduce
const funcReduce = users.reduce((acc, user) => {
    acc[user.id] = { name: user.name, description: user.description }
    return {...acc};
}, {});
console.log(funcReduce);

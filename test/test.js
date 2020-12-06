
const qui = require('../src/index')

const db = new qui.Database()

db.createPool({
    id: '23MSdShd',
    name: 'myPool',
    capacity: '2.0 GB',
    user: 'root',
    password: 'mypasswordhahabyebye'
})

db.loadPool('23MSdShd') // execute all the information specified on the createPool funct

db.createSchema('blog', { 
    title: 'String',
    description: 'String',
    author: 'String',
    socialMedia: {
        instagram: 'String',
        facebook: 'String'
    }
}) // blog is the name of the database

db.prepare({ key: 'author', value: 'Pau' }) // prepare data for the query function

// insert
db.query('INSERT INTO POOL myPool, DATABASE blog VALUES (author, Pau)')

// select
let o = db.query('SELECT * FROM POOL myPool, DATABASE blog WHERE KEY = author')
console.log(o)
// evaluate result (check if an object exists)
let r = db.query('EVALUATE RESULT FROM POOL myPool, DATABASE blog WHERE KEY = author')

db.close() // close the connnection to a database
# MyQui 

[MyQui](https://myqui.glitch.me) is a simple, interactive database created for facilitating data management in your company or project created by the Softnoir Corporation.


## Installation
You can install this package using the following command:
```bash
npm install myqui --save
```

## Documentation
REMINDER: You still can see the documentation at our [web](https://myqui.glitch.me).
This is a codebox for learning to use MyQui:
```js
const qui = require('myqui')

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
 
// evaluate result (check if an object exists)
let r = db.query('EVALUATE RESULT FROM POOL myPool, DATABASE blog WHERE KEY = author')

db.close() // close the connnection to a database
```

## Source code
If you want to change something on this service or recommend something, see our [GitHub](https://github.com/MyQui) account.

## Changelog
- 3.0.2 ◆ Reinvented the language of queries, added pools technology, schemas technology and close function.
- 3.0.0 ◆ Added model compatibility and fixed JSON.stringify technology.

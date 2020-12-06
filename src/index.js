const fs = require('fs')
const figlet = require('figlet')
const colors = require('colors')
const { v4: uuidv4 } = require('uuid')

function Database() {

    if(!fs.existsSync(`myqui`)){
        fs.mkdirSync('myqui')
    }
}

Database.prototype.createPool = function(params) {
    id = params.id
    poolname = params.name
    capacity = params.capacity
    user = params.user
    password = params.password

    if(!fs.existsSync(`myqui/${poolname}/`)){
        fs.mkdirSync(`myqui/${poolname}/`)
    }
}

Database.prototype.loadPool = function(name) {
    name = id
}

Database.prototype.createSchema = function(name, schema) {

    schn = name
    sch = schema


    if(!schema.__id) schema.__id = uuidv4()
    
    if(!fs.existsSync(`myqui/${poolname}/${name}.qui`)){
    fs.writeFileSync(`myqui/${poolname}/${name}.qui`, JSON.stringify(schema, null, 2))
    }
}


Database.prototype.prepare = function(options) {
    key = options.key
    value = options.value

}



Database.prototype.query = function(string) {
        if (string === `INSERT INTO POOL ${poolname}, DATABASE ${schn} VALUES (${key}, ${value})`){

        let col = fs.readFileSync(`myqui/${poolname}/${schn}.qui`, 'utf-8')
        let fcol = JSON.parse(col)
    
        fcol[key] = value
        fs.writeFileSync(`myqui/${poolname}/${schn}.qui`, JSON.stringify(fcol, null, 2))
        }
    
        if (string === `SELECT * FROM POOL ${poolname}, DATABASE ${schn} WHERE KEY = ${key}`) {
            let col = fs.readFileSync(`myqui/${poolname}/${schn}.qui`, 'utf-8')
            let fcol = JSON.parse(col)
        
            return fcol[key]
        }
    
        if (string === `EVALUATE RESULT FROM POOL ${poolname}, DATABASE ${schn} WHERE KEY = ${key}`) {
            let col = fs.readFileSync(`myqui/${poolname}/${schn}.qui`, 'utf-8')
    
            let fcol = JSON.parse(col)
            let objf = fcol[key]
        
            if(objf){
                return true
            } else if (!objf){
                return false
            }
        }
}

Database.prototype.close = function() {

}

module.exports = {
    Database
}
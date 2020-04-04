// CRUD
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) =>{
    if (error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    
    db.collection('tasks').deleteMany({
        
        completed : true
    
    }).then( (result) =>{
        console.log(result.deletedCount)
    }).catch((error) =>{
        console.log(error)
    })


    // db.collection('users').deleteOne({
        
    //     _id : ObjectID("5e2e04fda0cec64518046761")
    
    // }).then( (result) =>{
    //     console.log(result.deletedCount)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('users').updateMany({
    //     age: 27
    // },{
    //     $set:{
    //     name:'José'
    //     }
    // }).then( (result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })
   
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5e2e04fda0cec64518046760')
    // }, {
    //     $inc: {
    //         age: 2
    //     }
    // }).then( (result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })
    
    // db.collection('users').findOne({age: 1}, (error, user) =>{
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age :1}).toArray((error, users)=>{
    //     console.log(users)
    // })

    // db.collection('users').insertOne({
    //     name: 'Ana',
    //     age: 27
    // }, (error, result) =>{
    //     if (error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    
    
    // db.collection('users').insertMany([{
    //     name: 'Jose',
    //     age: 27
    // },{
    //     name: 'Jose',
    //     age: 27
    // }], (error, result)=>{
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })


    // db.collection('tasks').insertMany([{
    //     description: 'Terminar curso node',
    //     completed: false
    // },{
    //     description: 'Hacer horas de calipso',
    //     completed: false
    // },{
    //     description: 'Pasear perro',
    //     completed: true
    // },], (error, result)=>{
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })
})
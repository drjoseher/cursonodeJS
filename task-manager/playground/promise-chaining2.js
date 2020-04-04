require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndUpdate('5e66eeffb424cb33e4f420b5', {completed: true}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async  (id)=>{
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5e30feb30b32f73cd435ae20').then((result) =>{
    console.log('Result ' , result)
}).catch((e) =>{
    console.log(e)
})
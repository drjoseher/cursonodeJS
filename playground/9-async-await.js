const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b< 0){
                reject('Number must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () =>{
    const sum  = await add(99, -1)
    const sum2  = await add(sum, 50)
    const sum3  = await add(sum2, 3)
    return sum3
}

doWork().then((result )=>{
    console.log('result ', result)
}).catch((e) =>{
    console.log('e ', e)
})
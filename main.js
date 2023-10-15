
// let a=()=>{
    
//     let a1=new Promise((resolve,reject)=>{
//     resolve(10)
    

// })

// a1.then(document.write("first<br>"))
// return 10
// }




// let b=()=>{
//     let b1=new Promise((resolve,reject)=>{
//     resolve(20)
    

// })

// b1.then(document.write("sec<br>"))
// return 20
// }






// let c=()=>{
//     let c1=new Promise((resolve,reject)=>{
//     resolve(30)
    

// })
// c1.then(document.write("third<br>"))
// return 30
// }


// document.write(a()+b()+c());


let value1=new Promise((resolve)=>{
    resolve(10)
})

value1.then(document.write("First promise process<br>"))


let value2=new Promise((resolve)=>{
    resolve(20)
})

value1.then(document.write("Second  promise process<br>"))


let value3=new Promise((resolve)=>{
    resolve(30)
})

value1.then(document.write("Third promise process<br>"))

Promise.all([value1,value2,value3]).then((array)=>{
    document.write(`<br>[ ${array} ]`)
   let c= array.reduce((a,b)=>{
        return a+b

    })

    document.write(` <br><br>Total = ${c}`)
})





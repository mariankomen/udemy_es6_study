//
// setTimeout(()=> {
//     console.log("Preparing data..")
//
//     const BackEndData = {
//         port: 2003,
//         server: "aws",
//         status: "Working"
//     }
//     setTimeout(()=>{
//         BackEndData.modified = true;
//         console.log("Data recieved: ", BackEndData)
//     },2000)
// },2000)
console.log("Request data: ...")

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Preparing data..")
        const BackEndData = {
            port: 2003,
            server: "aws",
            status: "Working"
        }
        resolve(BackEndData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        },2000)
    })
}).then(ClientData => {
    console.log("Acces denied: ", ClientData)
    return ClientData
}).then(ClientMidifiedData =>{
    ClientMidifiedData.age = 23;
    console.log("New data: ",ClientMidifiedData);
})



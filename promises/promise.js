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
// console.log("Request data: ...")
//
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Preparing data..")
//         const BackEndData = {
//             port: 2003,
//             server: "aws",
//             status: "Working"
//         }
//         resolve(BackEndData)
//     }, 2000)
// })
//
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         },2000)
//     })
// }).then(ClientData => {
//     console.log("Acces denied: ", ClientData)
//     return ClientData
// }).then(ClientMidifiedData =>{
//     ClientMidifiedData.age = 23;
//     console.log("New data: ",ClientMidifiedData);
// })
// helo
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => console.log("Aster 2 sec"))
sleep(4000).then(() => console.log("Aster 4 sec"))
sleep(7000).then(() => console.log("Aster 7 sec"))

Promise.all([sleep(2000), sleep(4000), sleep(7000)]).then(() => {console.log(2+2)})



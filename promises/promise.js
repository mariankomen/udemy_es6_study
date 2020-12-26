console.log("Request data: ...")

setTimeout(()=> {
    console.log("Preparing data..")

    const BackEndData = {
        port: 2003,
        server: "aws",
        status: "Working"
    }
    setTimeout(()=>{
        BackEndData.modified = true;
        console.log("Data recieved: ", BackEndData)
    },2000)
},2000)
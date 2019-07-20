
let sum = (a, b) =>{
    return new Promise((resolve, rejects) =>{
        setTimeout(() => {
            if(typeof a != "number" || typeof b != "number"){
                return rejects("Valid number");
            }
            resolve(a + b);
        }, 1000);
    });
}

// let getToatal = async () =>{
//     try{
//         let total1 = await sum(7, 10);
//         console.log(total1);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getToatal();


(async () =>{
    try{
        let total1 = await sum(7, 10);
        console.log(total1);
    }
    catch(error){
        console.log(error);
    }
})();


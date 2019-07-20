//import { resolve } from "dns";
//import { rejects } from "assert";

let sum = (a, b) =>{
    return new Promise((resolve, rejects) =>{
        setTimeout(() => {
            if(typeof a != "number" || typeof b != "number"){
                return rejects("Valid number");
            }
            resolve(a + b);
        }, 1000);
    })
}

sum(7, 10)
    .then((total) => sum(total, 10))
    .then((total1) =>{
        console.log(total1);
    })
    .catch((err) =>{
        console.log(err);
    });

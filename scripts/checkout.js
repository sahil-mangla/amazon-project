import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practise.js'
// import '../data/cart-class.js';

/* async await 
    shourtcut for promises
    let us wirte asynchronus code like normal code
*/


async function loadPage(){
    
    
    try{
        // throw 'error1';

        await loadProductsFetch();

    await new Promise((resolve, reject)=>{
        // throw 'error2'; 
        //throw doesnt work in future reject does
        loadCart(()=>{
            // reject('error3')
            resolve(); //load cart
        });
    });

    } catch(error) {
        console.log('Unexpected error. Please try again later.');
    }
    
    //await can only be used in async function

    renderOrderSummary(); 
    renderPaymentSummary();

    

}
loadPage();





// Promise.all([
//     loadProductsFetch(),

// new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve(); //load cart
//         });
// })

// ]).then((values)=>{
//     console.log(values);
    
//     renderOrderSummary(); 
//     renderPaymentSummary();
// });





/*
new Promise((resolve)=>{
    //runs the inner function immediatelty 
    loadProducts(()=>{
        resolve('value1'); //load products
    });
    
}).then((value)=>{
    console.log(value);
    
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve(); //load cart
        });
    });

}).then(()=>{
    renderOrderSummary(); //render other sh
    renderPaymentSummary();
});
*/

/* 
Too much nesting to deal with on longer run

loadProducts(() =>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/

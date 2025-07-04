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
    
    //await can only be used in async function
    await loadProductsFetch();

    await new Promise((resolve)=>{
        loadCart(()=>{
            resolve(); //load cart
        });

    renderOrderSummary(); 
    renderPaymentSummary();

    });

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

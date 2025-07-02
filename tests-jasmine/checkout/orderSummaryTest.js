import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js"
import { loadFromStorage } from "../../data/cart.js";

describe('Test Suite: renderOrderSummary',()=>{
    it('displaces the cart',()=>{
        document.querySelector('.js-test-container').innerHTML = `<div class="js-order-summary"></div>`;
        
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 2,
                    deliveryOptionId: '1',
                },{
                    productId:'83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
                    quantity: 1,
                    deliveryOptionId: '2',
                }]); //made cart empty array
        });
    loadFromStorage(); //cart empty krdi

    renderOrderSummary();

    });
});


import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const initState = {
    productItems:localStorage.getItem('productItems') ? JSON.parse(localStorage.getItem('productItems')) : [],
    cartTotalAmount:0,
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] , 
    cartTotalQuantity: 0,
    reviews:[],
    searchResult:[],
};



const productSlice = createSlice({
    name:'cart',
    initialState : initState,
    reducers: {
        decrease: (state , action) => {
            const productIndex = state.productItems.findIndex(
                (item) => item.id === action.payload.id
            )

            if(productIndex >= 0 ){
                state.productItems[productIndex].cartQuantity -= 1;
            }

            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
                const customId = "custom-id-yes";
                toast.info(`Decreased  ${action.payload.title}  cart quantity` , {
                    position:'bottom-left',
                    toastId: customId,
                    autoClose: 100
                });

            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const cartId = state.cartItems.filter((cart) => cart.id !== action.payload.id);
                state.cartItems = cartId;
                const customId = "custom-id-yes";
                toast.error(`${action.payload.title} Removed from cart` , {
                    position:'bottom-left',
                    toastId: customId,
                    autoClose: 100
                });
            }
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
        },



        addToCart: (state , action) => {
            const productIndex = state.productItems.findIndex(
                (item) => item.id === action.payload.id
            )
            
            if(productIndex >= 0){
                state.productItems[productIndex].cartQuantity += 1;
            }

            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                const customId = "custom-id-yes";
                toast.info(`Increased  ${action.payload.title}  product quantity` , {
                    position:'bottom-left',
                    toastId: customId,
                    autoClose: 100
                });
                
            }else{
                const tempProduct = {...action.payload , cartQuantity:1}

                state.cartItems.push(tempProduct);
                const customId = "custom-id-yes";
                toast.success(` Added  ${action.payload.title}  to cart` , {
                    position:'bottom-left',
                    toastId: customId,
                    autoClose: 100
                });
            
            }
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
        },

        deleteCart: (state , action) => {
            const removeCart = state.cartItems.filter((cart) => cart.id !== action.payload.id);
            state.cartItems = removeCart;
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));

            const customId = "custom-id-yes";
            toast.error(`${action.payload.title} Removed from cart` , {
                position:'bottom-left',
                toastId: customId,
                autoClose: 100
            });
        },

        clearCartPage: (state , action) => {
            state.cartItems=[];
            const customId = "custom-id-yes";
            toast.error('Removed all carts' , {
                position:'bottom-left',
                toastId: customId,
                autoClose: 100
            });
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
        },

        getTotals: (state , action) => {
            let {total , quantity} = state.cartItems.reduce((cartTotal , cartItem) => {
                const {price , cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
            {
                total:0,
                quantity:0,
            }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

        getProduct: (state , action) => {
            state.productItems.push({...action.payload , cartQuantity:0});
            const getItem = state.productItems.filter((product) => product.id === action.payload.id);
            state.productItems = getItem;
            localStorage.setItem('productItems' , JSON.stringify(state.productItems));
        },

        addReview: (state , action) => {
            state.reviews.push(action.payload)
        },
        
        getDataSearch: (state , action) => {
            state.searchResult.push(action.payload);
        }
    }
})

export default productSlice.reducer;
export const {decrease,addToCart,deleteCart,clearCartPage,getTotals,getProduct,addReview , getDataSearch} = productSlice.actions;




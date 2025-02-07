import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "./Cart";


const productSlice = createSlice({
    name:'Products',
    initialState:{
        vegItem:[
            {image:"p1.jpg",name:"Potato",price:"70"},
            {image:"p2.jpg",name:"Tomato",price:"155"},
            {image:"p3.jpg",name:"Carrot",price:"200"},
            {image:"p4.jpg",name:"BeetRoot",price:"230"},
            {image:"p5.jpg",name:"Capsicum",price:"280"},
            {image:"p6.jpg",name:"Cucumber",price:"170"},
            {image:"p7.jpg",name:"Brinjal",price:"97"},
            {image:"p8.jpg",name:"Chillies",price:"321"},
            {image:"p9.jpg",name:"Radish",price:"236"},
            {image:"p0.jpg",name:"Califlower",price:"243"},
            {image:"p01.jpg",name:"Cabbage",price:"260"},
            {image:"p02.jpg",name:"Capsicum",price:"180"}
        ],
        nonVeg:[
            {image:"c0.jpg",name:"Chicken",price:300},
            {image:"c1.jpg",name:"Mutton",price:700},
            {image:"c2.jpg",name:"Fish",price:500},
            {image:"c3.jpg",name:"Prawns",price:900},
            {image:"c4.jpg",name:"Eggs",price:300},
            {image:"c5.jpg",name:"Crabs",price:970},
            {image:"c6.jpg",name:"Beef",price:800},
            {image:"c7.jpg",name:"Turkey",price:80},
            {image:"c8.jpg",name:"Pork",price:20}



        ],
        milkItems:[
            {image:"m0.jpg",name:"Milk",price:50},
            {image:"m1.jpg",name:"Paneer",price:300},
            {image:"m2.jpg",name:"curd",price:70},
            {image:"m3.jpg",name:"Cheese",price:500},
            {image:"m4.jpg",name:"Ghee",price:900},
            {image:"m5.jpg",name:"Butter",price:650},
            {image:"m6.jpg",name:"Yogurt",price:780},
            {image:"m7.jpg",name:"Buttermilk",price:980},
            {image:"m8.jpg",name:"Cream",price:900},
        ],
        leafyVeg:[
            {image:"l0.jpg",name:"Curryleaves",price:77},
            {image:"l1.jpg",name:"Corianderleaves",price:43},
            {image:"l2.jpg",name:"Palak",price:23},
            {image:"l3.jpg",name:"Gongura",price:110},
            {image:"l4.jpg",name:"Moringa",price:210},
            {image:"l5.jpg",name:"Mint",price:900},
            {image:"l6.jpg",name:"Methi",price:75},
            {image:"l7.jpg",name:"Boccoli",price:123},
            {image:"l8.jpg",name:"Water spinach",price:23}
        ],
        fruits:[
            {image:"f0.jpg",name:"Apple",price:900},
            {image:"f1.jpg",name:"Grapes",price:150},
            {image:"f2.jpg",name:"Orange",price:90},
            {image:"j3.jpg",name:"Kiwi",price:900},
            {image:"j4.jpg",name:"Avacado",price:430},
            {image:"f5.jpg",name:"Banana",price:450},
            {image:"f6.jpg",name:"PineApple",price:50},
            {image:"f7.jpg",name:"Strawberry",price:120},
            {image:"f8.jpg",name:"Mango",price:84}
        ]
    },
    reducers:{}
})
//
const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action) =>{
            const item= state.find(item=> item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action)=>{
            const item= state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
        },
        decrement:(state,action)=>{
            const item= state.find(item=>item.name===action.payload.name);
            if(item&&item.quantity>1)
            {
                item.quantity-=1;
            }
            else
            {
                return state.filter(item=> item.name!==action.payload.name);
            }
        },
        remove:(state,action)=>{
            return state.filter(item=> item.name!==action.payload.name);
        },
        clearCart:()=>[],
    }
})
//
const purchaseDetailsSlice=createSlice({
    name:'purchaseDetails',
    initialState:[],
    reducers:{
        completePurchase:(state,action)=>{
            state.push(action.payload);
        }
    }
})


const store= configureStore({
    reducer:{products: productSlice.reducer,
    cart:cartSlice.reducer,
    purchaseDetails:purchaseDetailsSlice.reducer

}
    
})
export const {addToCart,increment,decrement,remove,clearCart}= cartSlice.actions;
export const {completePurchase}= purchaseDetailsSlice.actions;
export default store;
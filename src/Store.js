import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "./Cart";


const productSlice = createSlice({
    name:'Products',
    initialState:{
        vegItem:[
            {image:"p1.jpg",name:"Potato",price:"50.65"},
            {image:"p2.jpg",name:"Tomato",price:"25.12"},
            {image:"p3.jpg",name:"Carrot",price:"120.23"},
            {image:"p4.jpg",name:"BeetRoot",price:"105.32"},
            {image:"p5.jpg",name:"Capsicum",price:"85.12"},
            {image:"p6.jpg",name:"Cucumber",price:"54.78"},
            {image:"p7.jpg",name:"Brinjal",price:"23.35"},
            {image:"p8.jpg",name:"Chillies",price:"32.87"},
            {image:"p9.jpg",name:"Radish",price:"63.55"},
            {image:"p0.jpg",name:"Califlower",price:"102.33"},
            {image:"p01.jpg",name:"Cabbage",price:"60.66"},
            {image:"p02.jpg",name:"Capsicum",price:"53.23"}
        ],
        nonVeg:[
            {image:"c0.jpg",name:"Chicken",price:280.45},
            {image:"c1.jpg",name:"Mutton",price:700.76},
            {image:"c2.jpg",name:"Fish",price:350.44},
            {image:"c3.jpg",name:"Prawns",price:900.65},
            {image:"c4.jpg",name:"Eggs",price:95.30},
            {image:"c5.jpg",name:"Crabs",price:970.45},
            {image:"c6.jpg",name:"Beef",price:800.43},
            {image:"c7.jpg",name:"Turkey",price:80.22},
            {image:"c8.jpg",name:"Pork",price:20.12}
        ],
        milkItems:[
            {image:"m0.jpg",name:"Milk",price:70.67},
            {image:"po.jpg",name:"Paneer",price:120.34},
            {image:"cu.jpg",name:"curd",price:69.87},
            {image:"m3.jpg",name:"Cheese",price:99.50},
            {image:"m4.jpg",name:"Ghee",price:210.33},
            {image:"m5.jpg",name:"Butter",price:120.56},
            {image:"m6.jpg",name:"Yogurt",price:299.99},
            {image:"m7.jpg",name:"Buttermilk",price:22.99},
            {image:"m8.jpg",name:"Cream",price:101.99},
        ],
        leafyVeg:[
            {image:"cu.jpg",name:"Curryleaves",price:20.00},
            {image:"co.jpg",name:"Corianderleaves",price:30.00},
            {image:"pa.jpg",name:"Palak",price:35.00},
            {image:"go.jpg",name:"Gongura",price:15.90},
            {image:"mo.jpg",name:"Moringa",price:45.65},
            {image:"l5.jpg",name:"Mint",price:32.56},
            {image:"l6.jpg",name:"Methi",price:75.65},
            {image:"l7.jpg",name:"Boccoli",price:123.68},
            {image:"l8.jpg",name:"Water spinach",price:99.79}
        ],
        fruits:[
            {image:"a.jpg",name:"Apple",price:300.64},
            {image:"f1.jpg",name:"Grapes",price:150.64},
            {image:"f2.jpg",name:"Orange",price:90.54},
            {image:"j3.jpg",name:"Kiwi",price:150.43},
            {image:"av.jpg",name:"Avacado",price:298.99},
            {image:"ba.jpg",name:"Banana",price:50.32},
            {image:"f6.jpg",name:"PineApple",price:70.65},
            {image:"st.jpg",name:"Strawberry",price:50.34},
            {image:"f8.jpg",name:"Mango",price:185.85}
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
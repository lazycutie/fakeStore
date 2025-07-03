import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{ 
            var lala = action.payload
            const ItemIndex = state.carts.findIndex((item)=>item.id ===lala.id);
            if(ItemIndex>=0){
                state.carts[ItemIndex].qnty += 1
            }
            else{
                const tempt = {...lala,qnty:1}
                state.carts=[...state.carts,tempt]
            }
             
        },
        removeItems:(state,action)=>{
            var lala = action.payload
            const data = state.carts.filter((element)=>element.id !== lala);
            state.carts = data
        },
        removeSingle:(state,action)=>{
            var lala = action.payload
            const ItemIndex_dec = state.carts.findIndex((item)=>item.id ===lala.id);
            if(state.carts[ItemIndex_dec].qnty >=1){
                state.carts[ItemIndex_dec].qnty -= 1
            }
        },

        clearCart:(state,action)=>{
            state.carts = []
        }

    }
});

export const {addtoCart,removeItems,removeSingle,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
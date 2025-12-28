import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{

        addItem: (state, action)=>{
                state.items.push(action.payload)
        },
        removeItems: (state, action)=>{

        },
        clearFav : (state)=>{
            state.items = []
        }
    }
})


export const {addItem, removeItems, clearFav} = slice.actions
export default slice.reducer
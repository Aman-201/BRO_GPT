import {createSlice} from '@reduxjs/toolkit'

const initialState={
    status:false,
    ques:null,
    ans:null
}
const chatSlice=createSlice({
    name:'chat',
    initialState,
    reducers:{
        getQues:(state,action)=>{
            state.status=true,
            state.ques=action.payload.data
            console.log("inside  getques reduces",state,action.payload.data)
        },
        getAns:(state,action)=>{
            state.status=false,
            state.ans=action.payload.data
        }
    }
})
export const {getAns,getQues}=chatSlice.actions;
export default chatSlice.reducer
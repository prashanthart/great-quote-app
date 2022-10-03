import { useCallback, useReducer } from "react";

function httpReducer(state,action){

    if(action.type==='SEND'){
        return {
            status:'Pending',
            data:null,
            error:null,
        }
    }
    if(action.type==='SUCCESS'){
        return {
            status : 'completed',
            error:null,
            data:action.response,
        }
    }
    if(action.type==='ERROR'){
        return{
            status : 'completed',
            error:action.errorMessage,
            data:null,
        }
    }
    return state;

}

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'Pending' : null,
    data:null,
    error:null,
  });

  const sendRequest = useCallback(
   async function  (requestData){
    dispatch({type:'SEND'});
    try{

        const response = await requestFunction(requestData);
        dispatch({type:'SUCCESS',response:response});
    }
    catch(error){
        dispatch({type:'ERROR',errorMessage:error.message||'something went wrong'});

    }
  },[requestFunction])


 return {
        sendRequest,
        ...httpState,
    }
}
export default useHttp;
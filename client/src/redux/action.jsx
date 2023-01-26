import instance from "../CommonUrl/URL";

export const register = (formData) => async(dispatch) => {
    try{
       dispatch({type:"RegisterLoading"})
        const {data} = await instance.post(`memorable/register`,formData);
        dispatch({type:"RegisterSuccess",payload:data})
    }catch(err){
        dispatch({type:"RegisterFail",payload:err.response.message})
    }
}
export const login = (inpots) => async(dispatch) => {
    try{
       dispatch({type:"LoginLoading"})
        const {data} = await  instance.post(`memorable/login`,{ email: inpots.email, password: inpots.password},{ withCredentials:true});
        dispatch({type:"LoginSuccess",payload:data})
    }catch(err){
        dispatch({type:"LoginFail",payload:err.response.message})
    }
}
export const allUsers = async(dispatch) => {
    try{
       dispatch({type:"UsersLoading"})
        const {data} = await  instance.get(`memorable/getUsers`);
        dispatch({type:"UsersSuccess",payload:data})
    }catch(err){
        dispatch({type:"UsersFail",payload:err.message})
    }
}

export const createPost = (formData) =>async(dispatch) => {
    try{
       dispatch({type:"PostLoading"})
        const {data} = await  instance.post(`post/post`,formData);
        dispatch({type:"PostSuccess",payload:data})
    }catch(err){
        dispatch({type:"PostFail",payload:err.response.message})
    }
}

export const getPosts = (formData) =>async(dispatch) => {
    try{
       dispatch({type:"GetPostLoading"})
        const {data} = await  instance.get(`post/post`);
        dispatch({type:"GetPostSuccess",payload:data})
    }catch(err){
        dispatch({type:"GetPostFail",payload:err.response.message})
    }
}
export const logout = async(dispatch) => {
    try{
       dispatch({type:"LogoutLoading"})
        const {data} = await  instance.get(`memorable/logOut`);
        dispatch({type:"LogoutSuccess",payload:data})
    }catch(err){
        dispatch({type:"LogoutFail",payload:err.response.message})
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
  };
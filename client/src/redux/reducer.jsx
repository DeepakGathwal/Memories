//Register Cases
export const register = (state = {register:{}},action) => {
    switch(action.type){
        case "RegisterLoading":
            return{
            loading:true}
        case "RegisterSuccess":
            return{
            loading:false,
            register:action.payload
        }
        case "RegisterFail":
            return{
            loading:null,
            register:action.payload
        }
       
        default:
            return state
    }
}

//Login Cases
export const login = (state = {login:[]},action) => {
    switch(action.type){
        case "LoginLoading":
            return{ loading:true }
        case "LoginSuccess":
            return{
            loading:false,
            login:action.payload
        }
        case "LoginFail":
            return{
            loading:null,
            login:"No User Found"
        }
        default:
            return state
    }
}


//All Users Except only login one
export const allUser = (state = {users:{}},action) => {
    switch(action.type){
        case "UsersLoading":
            return{ loading:true }
        case "UsersSuccess":
            return{
            loading:false,
            users:action.payload
        }
        case "UsersFail":
            return{
            loading:null,
            users:action.payload
        }
       
        default:
            return state
    }
}

export const posts = (state = {post:{}},action) => {
    switch(action.type){
        case "PostLoading":
            return{ loading:true }
        case "PostSuccess":
            return{
            loading:false,
            users:action.payload
        }
        case "PostFail":
            return{
            loading:null,
            users:action.payload
        }
       
        default:
            return state
    }
}

export const allPosts = (state = {posts:{}},action) => {
    switch(action.type){
        case "GetPostLoading":
            return{ loading:true }
        case "GetPostSuccess":
            return{
            loading:false,
            users:action.payload
        }
        case "GetPostFail":
            return{
            loading:null,
            users:action.payload
        }
       
        default:
            return state
    }
}

//Logout Active User
export const Logout = (state = {logout:{}},action) => {
    switch(action.type){
        case "LogoutLoading":
            return{ loading:true }
        case "LogoutSuccess":
            return{
            loading:false,
            users:action.payload
        }
        case "LogoutFail":
            return{
            loading:null,
            users:action.payload
        }
       
        default:
            return state
    }
}
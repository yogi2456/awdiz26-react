import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react'
import toast from 'react-hot-toast';

export const AuthContext = createContext();

function Reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, }
        default:
            return state;
    }
}

const InitialState = { user: null }

const AuthContextComponent = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, InitialState)

    function LOGIN(data) {
        dispatch({ type: "LOGIN", payload: data })
    }

    function LOGOUT() {
        dispatch({ type: "LOGOUT" })
        toast.success("logout successfull")
    }

    async function getUserData(token) {
        try {
            const response = await axios.get('http://localhost:3003/api/v1/auth/validate-token', { withCredentials: true, });
            // const response = { data: { success: true, userData: { name: 'yogesh', email: "yogesh@gmail.com" } } }
            if (response.data.success) {
                LOGIN(response.data.user)
                console.log(response.data.user, "user")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // const token = JSON.parse(localStorage.getItem("token"))
        // if (token) {
        //     getUserData(token)
        // }
        getUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ state, LOGIN, LOGOUT }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextComponent;

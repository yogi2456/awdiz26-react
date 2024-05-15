import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const SellerProtected = ({children}) => {
  

    const router = useNavigate();
    const { state } = useContext(AuthContext);

    useEffect(() => {
        if(state?.user && state?.user?.role !== "seller") {
            toast.error("You are not allow to access this page")
            return router("/login")
        }
    }, [state])
    return children
}

export default SellerProtected

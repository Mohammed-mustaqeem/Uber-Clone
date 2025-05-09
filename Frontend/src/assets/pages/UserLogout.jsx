import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogout =async () => {

    const token = localStorage.getItem('token')
    const Navigate = useNavigate()

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (response.status === 200) {
        console.log("logout success", response.data);
        localStorage.removeItem('token')
        Navigate('/login')
        
    }


  return (
    <div>
      Userlogout
    </div>
  )
}

export default UserLogout

import React,{useContext} from 'react'
import { userDataContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const Navigate = useNavigate()

    if (!token) {
      Navigate("/login");
    }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper

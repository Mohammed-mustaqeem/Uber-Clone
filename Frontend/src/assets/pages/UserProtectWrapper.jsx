import React,{useContext, useEffect} from 'react'
import { userDataContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const Navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      Navigate("/login");
      console.log(token, "token")
    }
  }
  , [token, Navigate])
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper

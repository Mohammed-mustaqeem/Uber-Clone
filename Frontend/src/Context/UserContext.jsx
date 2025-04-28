import React, { createContext, useState } from 'react'

export const userDataContext = createContext();

const UserContext = ({children}) => {

    const [UserData, setUserData] = useState({
        fullname:{
            firstname:"",
            lastname:""
        },
        email:"",
    });
  return (
    <div>
      <userDataContext.Provider value={[UserData , setUserData]}>{children}</userDataContext.Provider>
    </div>
  );
}

export default UserContext

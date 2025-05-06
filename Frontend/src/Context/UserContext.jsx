import React, { createContext, useState } from 'react'

export const userDataContext = createContext();

const UserContext = ({children}) => {

    const [User, setUser] = useState({
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
    });
  return (
    <div>
      <userDataContext.Provider value={[User, setUser]}>
        {children}
      </userDataContext.Provider>
    </div>
  );
}

export default UserContext

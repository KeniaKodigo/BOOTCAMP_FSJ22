import { createContext, useState } from "react"

export const UserContext = createContext(null);

export const MyProvider = ({children}) => {
    const [data,setData] = useState(null);

    const userObject = {
        data,
        setData
    }

  return (
    <UserContext.Provider value={userObject}>
        {children}
    </UserContext.Provider>
  )
}

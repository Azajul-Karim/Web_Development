import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  const [name, setName] = React.useState('John')
  return (
    <UserContext.Provider value={{name, setName}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

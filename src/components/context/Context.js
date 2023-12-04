import React, { createContext, useState, useEffect } from 'react'
export const provider = createContext();
import { fetcher } from '../utilsFunctions/fetcher';
const Context = ({ children }) => {
  const [data, setData] = useState()

  return (
    <provider.Provider value={{
      appData: [data, setData]
    }}>
      {children}
    </provider.Provider>
  )
}

export default Context

import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { comments } from '../data/data'

export const DarkModeContext = createContext()

export const ThemeMode = ({children}) => {
    const[darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    )
    const[commentOpen, setCommentOpen] = useState(false)
    const[user, setUser] = useState(comments)

    useEffect(() => {
     localStorage.setItem("darkMode", darkMode)
    }, [darkMode])
    
    const toggleTheme  = () => {
        setDarkMode(!darkMode)
    }
    
    const toggleComment = (index) =>{
      const commentSection = comments.find((x,i)=> i === index);
      setUser(commentSection)
      setCommentOpen(!commentOpen)
    }

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode, toggleTheme, setCommentOpen, commentOpen, toggleComment}}>
        {children}
    </DarkModeContext.Provider>
  )
}

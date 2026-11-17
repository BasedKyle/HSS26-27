import React, { useEffect } from 'react'
import { mainAPI } from '../services'

export const HomePage = () => {
  useEffect(() => {
    mainAPI.getAllCharacter()
  }, [])

  return (
    <div>
      
    </div>
  )
}

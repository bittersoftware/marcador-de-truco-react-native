import React, { createContext, useContext, useState } from 'react'

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [currentTeamAName, setCurrentTeamAName] = useState('')
  const [currentTeamBName, setCurrentTeamBName] = useState('')
  const [defaultTeamAName, setDefaultTeamAName] = useState('Equipe Azul')
  const [defaultTeamBName, setDefaultTeamBName] = useState('Equipe Verde')
  const [currentGameMode, setCurrentGameMode] = useState(1)
  const [defaultGameMode, setDefaultGameMode] = useState('')

  const values = {
    currentTeamAName,
    setCurrentTeamAName,
    currentTeamBName,
    setCurrentTeamBName,
    defaultTeamAName,
    setDefaultTeamAName,
    defaultTeamBName,
    setDefaultTeamBName,
    currentGameMode,
    setCurrentGameMode,
    defaultGameMode,
    setDefaultGameMode,
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = () => {
  return useContext(SettingsContext)
}

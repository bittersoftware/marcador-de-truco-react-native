import React, { createContext, useContext, useState } from 'react'
import images from '../constants/images'

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [defaultTeamAName, setDefaultTeamAName] = useState('Equipe Azul')
  const [defaultTeamBName, setDefaultTeamBName] = useState('Equipe Verde')
  const [defaultTeamAAvatar, setdefaultTeamAAvatar] = useState(images.avatar1)
  const [defaultTeamBAvatar, setdefaultTeamBAvatar] = useState(images.avatar2)
  const [currentTeamAName, setCurrentTeamAName] = useState(defaultTeamAName)
  const [currentTeamBName, setCurrentTeamBName] = useState(defaultTeamBName)
  const [currentTeamAAvatar, setCurrentTeamAAvatar] =
    useState(defaultTeamAAvatar)
  const [currentTeamBAvatar, setCurrentTeamBAvatar] =
    useState(defaultTeamBAvatar)
  const [currentGameMode, setCurrentGameMode] = useState({
    maxWins: 1,
    maxMatches: 1,
  })
  const [defaultGameMode, setDefaultGameMode] = useState('')

  const values = {
    currentTeamAAvatar,
    setCurrentTeamAAvatar,
    currentTeamAName,
    currentTeamBAvatar,
    setCurrentTeamBAvatar,
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

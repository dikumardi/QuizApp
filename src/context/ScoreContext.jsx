import React, { createContext, useContext, useState } from 'react'

export const ScoreDataContext = createContext()
const ScoreContext = (props) => {
    const [score, setscore] = useState(0)
  return (
    <ScoreDataContext.Provider value={[score, setscore]}>{props.children}</ScoreDataContext.Provider>
  )
}

export default ScoreContext
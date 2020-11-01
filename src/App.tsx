import React from 'react'
import cn from 'classnames'

import './custom.css'
import s from './App.modules.scss'

import './example.ts'

const App: React.FunctionComponent = () => {
  return (
    <div className={cn(s.header, 'color')}>
      This is App Component
    </div>
  )
}

export default App

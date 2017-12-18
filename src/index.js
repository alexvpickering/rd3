import React from 'react'
import ReactDOM from 'react-dom'
import Abcs from './components/Abcs'
import { invalidateAbcs } from './actions'
import store from './store'

ReactDOM.render(
  <Abcs
    letters={['a', 'b', 'c']}
    onLettersClick={() => {
        store.dispatch(invalidateAbcs())
      }}
    />,
   document.getElementById('root')
 )

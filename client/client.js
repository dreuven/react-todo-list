import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
// define the encompassing component that we want to mount,
// DOM element we want to mount it to
render(
  <App/>,
  document.getElementById('app')
)

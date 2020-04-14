import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "./pages/homepage"
import ImagePage from "./pages/image"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import imagesReducer from './pages/imagesSlice'

const store = configureStore({
  reducer: imagesReducer
})

window.matchMedia("(prefers-color-scheme: dark)").matches && document.body.classList.toggle('dark')

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/image/:id" exact component={ImagePage} />
        <Route component={() => <h1 style={{ textAlign: 'center' }}>404</h1>} />
      </Switch>
    </Router>
  </Provider>
)

export default App
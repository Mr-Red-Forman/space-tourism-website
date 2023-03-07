// system 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux'
// import { BrowserRouter HashRouter as Router } from 'react-router-dom'
// import { store } from './store/store'

// pages
import { HomePage } from "./views/home"
import { ErrorPage } from "./views/error-page"
import { Destination } from "./views/destination"
import { Crow } from "./views/crow"
import { Technology } from "./views/technology"

// component
import { AppHeader } from "./components/app-header"

export function RootCmp() {
  return (
    // <Provider store={store}>
      <Router>
          <AppHeader />
          <main className="">
            <Routes>
              <Route index element={<HomePage/>} errorElement= {<ErrorPage />}/>
              <Route path='destination' element={<Destination/>} errorElement= {<ErrorPage />}/>
              <Route path='crow' element={<Crow/>} errorElement= {<ErrorPage />}/>
              <Route path='technology' element={<Technology/>} errorElement= {<ErrorPage />}/>
            </Routes>
          </main>
      </Router>
    // </Provider>
  )


}

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Cadastrar } from "./Pages/Cadastrar"
import { Page404 } from "./Pages/Page404"
import { Menu } from "./Components/Menu"

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="cadastrar" element={<Cadastrar/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


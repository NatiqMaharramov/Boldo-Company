
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./About"
import Footer from "./Footer/Footer"
import Section7 from "./Main/section7/Section7"
import Page from "./Page"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Section7/>
      <Footer />

      </BrowserRouter>
    
    </div>
  )
}

export default App

import Header from "./components/Header"
import Main from "./components/MainContent"
import Benefits from "./components/Benefits"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import "./styles/components/app.sass"

function App() {

  return (
    <div id="site">
      <Header />
      <Main />
      <About />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

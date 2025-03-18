import HomePage from './Pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="container-fluid flex-grow-1">
        <div className="row h-100">
          <div className="col-md-3 col-lg-2 p-0 bg-light">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10 p-3">
            <HomePage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

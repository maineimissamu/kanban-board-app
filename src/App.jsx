import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreateTaskPage from './Pages/CreateTaskPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import TaskDetailPage from './Pages/TaskDetailPage';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        <Navbar />
        <div className="container-fluid flex-grow-1">
          <div className="row h-100">
            <div className="col-md-3 col-lg-2 p-0 bg-light">
              <Sidebar />
            </div>
            <div className="col-md-9 col-lg-10 p-3">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateTaskPage />} />
                <Route path="/task/:id" element={<TaskDetailPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
    );
}

export default App;

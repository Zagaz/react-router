import { Outlet, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";

function MainLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <header className='container-fluid bg-dark text-light'>
            <nav className='container-fluid justify-content-center mt-3 '>
              <h1>My Website</h1>
              <div className="row ">
                <div className="col text-center mb-3">
                  <Link className='btn btn-primary me-3 ' to="/"> <FaHome />  Home</Link>
                  <Link className='btn btn-primary me-3' to="/services"><MdCleaningServices />Services</Link>
                  <Link className='btn btn-primary me-3' to="/contacts"><FaRegEnvelope />Contacts</Link>
                  <Link className='btn btn-primary' to="/about"><FaRegEnvelope />About</Link>
                </div>
              </div>
            </nav>
          </header>
          {/* Aqui vai ser renderizado o conteúdo de cada página */}
          <Outlet />
          <footer className='container mt-5'>
            <div className="row">
            <p>© 2025 My Website</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default MainLayout;

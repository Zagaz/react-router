import { Outlet, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";

function MainLayout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <header>
            <nav className='container justify-content-center mt-3'>
              <h1>My Website</h1>
              <div className="row">
                <div className="col text-center">
                  <Link className='btn btn-primary me-3 ' to="/"> <FaHome />  Home</Link>
                  <Link className='btn btn-primary me-3' to="/services"><MdCleaningServices />Services</Link>
                  <Link className='btn btn-primary' to="/contacts"><FaRegEnvelope />Contacts</Link>
                </div>
              </div>
            </nav>
          </header>
          {/* Aqui vai ser renderizado o conteúdo de cada página */}
          <Outlet />
          <footer>
            <p>© 2025 My Website</p>
          </footer>
        </div>
      </div>

    </>
  );
}

export default MainLayout;

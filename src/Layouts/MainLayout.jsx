import { Outlet, Link } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/services">Services</Link> | 
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>

  
        {/* Aqui vai ser renderizado o conteúdo de cada página */}
        <Outlet />
  
      <footer>
        <p>© 2025 My Website</p>
      </footer>

    </>
  );
}

export default MainLayout;

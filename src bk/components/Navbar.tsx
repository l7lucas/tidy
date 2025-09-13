import { NavLink } from 'react-router-dom';

const linkStyle = {
  margin: '0 15px',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
};

function Navbar() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: '#333',
        padding: '10px 0',
        textAlign: 'center',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      }}
    >
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}

export default Navbar;


import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
export default Header;

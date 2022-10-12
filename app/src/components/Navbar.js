import '../styles/Navbar.css';
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>_codePocket</h1>
      <div className="links">
        <a href="/">About</a>
        <a href="/">Features</a>
        <a href="/">Team</a>
        <div className='login'>
          <a href="/">Log in</a>
          <button>Get started</button>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;
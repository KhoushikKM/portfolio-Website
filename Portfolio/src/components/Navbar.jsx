const Navbar = () => {
  return (
    <div id="Navbar">
        <div className="navbar-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
            
        </div>
        <div className='navbar-content' style={{ position: 'relative', zIndex: 1 }}>
            <div id="nav-links" style={{ position:'relative', zIndex: 1 }}>
                <a href="#Home">Home</a>
                <a href="#Education">Education</a>
                <a href="#Skills">Skills</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
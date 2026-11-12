function Header({ active = false }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#/">
          <img src="/images/logo.png" alt="YSSE Stage of Innovation" />
        </a>
        <nav className="main-nav" aria-label="Main">
          <a href="#/" className={active ? "active" : ""}>All Courses</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

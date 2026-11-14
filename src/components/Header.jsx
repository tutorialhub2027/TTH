export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <a className="menu-logo" href="#top">
          <strong>TTH</strong>
          <span>TuTorial Hub</span>
        </a>

        <nav className="navigation" aria-label="Main navigation">
          <a className="nav-home" href="#top" aria-current="page">Home</a>

          <details className="tutorials-main">
            <summary>Tutorials</summary>
            <ul className="tutorials-types">
              <li><a href="#school-curriculums">School Curriculums</a></li>
              <li><a href="#olympiads">Olympiads</a></li>
              <li><a href="#sports">Sports</a></li>
              <li><a href="#fixes">Fixes</a></li>
              <li><a href="#other">Other</a></li>
            </ul>
          </details>

          <a href="#links">Links</a>
          <a href="">About us</a>
        </nav>

        <a className="header-cta" href="#contribute">Contribute</a>
      </div>
    </header>
  )
}

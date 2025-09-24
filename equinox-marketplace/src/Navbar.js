import EquinoxLogo from './Images/EquinoxLogo.jpg';
import NavbarStyle from './Styles/NavbarStyle.module.scss';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${NavbarStyle.gradientBackground} ${NavbarStyle.navbarGeneral}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={EquinoxLogo} alt="Equinox Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
                <li className={`nav-item ${NavbarStyle.navbarButtons}`}>
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className={`nav-item ${NavbarStyle.navbarButtons}`}>
                <a className="nav-link" href="#">Marketplace</a>
                </li>
                <li className={`nav-item dropdown ${NavbarStyle.navbarButtons}`}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                    <ul className={`dropdown-menu ${NavbarStyle.navbarDropdown}`}>
                        <li><a className={`dropdown-item ${NavbarStyle.dropdownItem}`} href="#">View Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className={`dropdown-item ${NavbarStyle.dropdownItem}`} href="#">Login</a></li>
                        <li><a className={`dropdown-item ${NavbarStyle.dropdownItem}`} href="#">Register</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className={`dropdown-item ${NavbarStyle.dropdownItem}`} href="#">Log out</a></li>
                    </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className={`btn ${NavbarStyle.navbarSearchButton}`} type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>

  );
}
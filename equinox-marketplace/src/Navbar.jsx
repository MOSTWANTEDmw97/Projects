import EquinoxLogo from './Images/EquinoxLogo.jpg';
import NavbarStyle from './Styles/NavbarStyle.module.scss';
import { Link } from 'react-router-dom';

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
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className={`nav-item ${NavbarStyle.navbarButtons}`}>
                <Link className="nav-link" to="/Marketplace">Marketplace</Link>
                </li>
                <li className={`nav-item dropdown ${NavbarStyle.navbarButtons}`}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                    <ul className={`dropdown-menu ${NavbarStyle.navbarDropdown}`}>
                        <li><Link className={`dropdown-item ${NavbarStyle.dropdownItem}`} to="/Profile">View Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className={`dropdown-item ${NavbarStyle.dropdownItem}`} to="/Login">Login</Link></li>
                        <li><Link className={`dropdown-item ${NavbarStyle.dropdownItem}`} to="/Register">Register</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className={`dropdown-item ${NavbarStyle.dropdownItem}`} to="/Logout">Log out</Link></li>
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
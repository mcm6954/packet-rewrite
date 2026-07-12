// Base taken from Navbar at https://s3.csh.rit.edu/csh-material-bootstrap/4.3.1/index.html?#
import logo from "./assets/CSH-Logo-Round.svg"

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
            <img src={logo} style={{ height: "40px", width: "auto" }} /> Packet
            </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Active Packets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Signatures</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item navbar-user dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="user01">
                        <img src="https://profiles.csh.rit.edu/image/test"/>
                        Testing Tester
                        <span className="caret"></span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="user01">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Settings</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
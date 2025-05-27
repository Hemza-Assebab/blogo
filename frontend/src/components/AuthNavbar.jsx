import { Link } from "react-router-dom";

function AuthNavbar() {
    const ButtonStyles = {
        width: "80px",
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to={"/"} className="navbar-brand">Blogo</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <Link to={"/"} className="nav-link">Home</Link>
                    </li> */}
                    </ul>
                    <div className="d-flex" role="search">
                        <Link to={"/login"} style={ButtonStyles} className="btn btn btn-outline-success btn-sm me-2">Log In</Link>
                        <Link to={"/register"} style={ButtonStyles} className="btn btn btn-outline-dark btn-sm">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default AuthNavbar;

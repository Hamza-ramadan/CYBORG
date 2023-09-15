import"./Header.css"

import { Link , NavLink} from "react-router-dom"

import logo from "../../images/logo.png"
const Header = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container">
                    <Link className=" navbar-brand" to="/">
                        <img className="imge21" src={logo} alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                            <input className="form-control me-2  ggggg" type="search" placeholder="Search" aria-label="Search" />
                            <button className="pepep btn btn-outline-danger" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className=" heheh nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link heheh" to="/Browse">Browse</NavLink>
                            </li>
                            
                            <li className="nav-item">
                            <NavLink className="nav-link heheh" to="/Detailis">Detailis</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link heheh" to="/Streams">Streams</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                </div>
        </nav>
        </>
    )
}



export default Header;
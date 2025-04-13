import style from './menu.module.css'
import { Link } from 'react-router-dom';

export const Menu = (props) => {
    return(
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.navBar}`}>
        <div className={"container-fluid"}>
            <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className={"collapse navbar-collapse"} id="navbarNavAltMarkup">
            <div className={"navbar-nav"}>
            <Link className={"nav-link"}  to={'/'}>{props.option01}</Link>
            {props.option02 && (
              <a className={"nav-link"} href={"#s2"}>{props.option02}</a>
            )}
            {props.option03 && (
              <a className={"nav-link"} href={"#s3"}>{props.option03}</a>
            )}
            {props.option04 && (
              <Link className={"nav-link"} to={'/contact'}>{props.option04}</Link>
            )}
            </div>
            </div>
        </div>
        </nav>
    )
}
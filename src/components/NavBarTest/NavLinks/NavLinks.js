import classes from './NavLinks.module.css';

const NavLinks = (props) => {
    return (
        <div className={`${classes.navLink} ${props.screenSize < 600 && props.show ? classes.hide : ''}`}>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">contact</a>
            <a href="#">blog</a>
        </div>
    )
}

export default NavLinks;
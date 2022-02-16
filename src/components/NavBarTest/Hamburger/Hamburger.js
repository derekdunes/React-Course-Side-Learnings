import classes from './Hamburger.module.css';

const Hamburger = (props) => {
    return (
        <div className={classes.hamburger} onClick={props.onClicked}>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
        </div>
    )
}

export default Hamburger;
const ClockNumber = (props) => {

    return (
            <div className={`clock-number num${props.num}`}>
                <div className="">{props.num}</div>
            </div>
    )
}

export default ClockNumber;
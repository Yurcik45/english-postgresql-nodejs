import './SliderButton.sass'

const SliderButton = props => {
    return(
        <div
            onClick={() => props.setRandomGameType(!props.randomGameType)}
            className="SliderButton"
        >
            on / off
        </div>
    )
}

export default SliderButton;
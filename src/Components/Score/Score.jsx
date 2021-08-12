import './Score.sass'

const Score = props => {

    return (
        <div className="Score">
            Score : {" " + props.gameScore + " " + "of" + " " + props.countQuestions}
        </div>
    )
}

export default Score;
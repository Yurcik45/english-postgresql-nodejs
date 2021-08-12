import {useState, useReducer, useCallback, useEffect } from 'react'
import './Tests.sass'
import {useDispatch, useSelector} from "react-redux"
import {getOneWord, getWords} from "../../redux/actions/words"

const Tests = props => {

    const [, forceUpdate] = useReducer(x => x + 1, 0);




    const currentWord = useSelector(state => state.words.currentWord)

    const rightAnswer = props.showTranslate ? currentWord.original : currentWord.translate

    const answers = useSelector(state => state.words.testAnswers)



    // const[randomizeItems, setRandomizeItems] = useState([])
    const[badAnswer, setBadAnswer] = useState(false)

    const consequtiveNumbers = [0, 1, 2, 3];
    function randomizeNumbers(o) {
        for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    const randomPush = () => {
        // setRandomizeItems([])
        randomizeNumbers(consequtiveNumbers)
        // setRandomizeItems(consequtiveNumbers)
    }

    useEffect(() => {
        randomPush()
        props.startTests(4)
    }, [])



    const clickAnswer = e => {
        let answer = e.target.innerHTML
        if (answer === rightAnswer) {
            e.target.style.outlina = "3px solid green"
            setTimeout(() => {
                e.target.style.border = "1px solid black"
            }, 600)
            props.setCountQuestions(props.countQuestions + 1)
            if (badAnswer !== true) {
                props.setGameScore(props.gameScore + 1)
            }
            randomPush()
            props.startTests()
            setBadAnswer(false)
        } else {
            setBadAnswer(true)
            e.target.style.border = "3px solid red"
            setTimeout(() => {
                e.target.style.border = "1px solid black"
            }, 600)
        }
        forceUpdate()
    }

    console.log("Tests props", props)

    return(
        <div className="testsContainer">
           
        {
            answers ?
                answers.map((a, id) => {
                    return (
                    <div
                        className="testItem"
                        name={props.showTranslate ? a.original : a.translate}
                        onClick={e => clickAnswer(e)}
                        key={id}
                    >
                        {
                           props.showTranslate ? a.original : a.translate
                        }
                    </div>
                    )
                })
            : null
        }
            
        </div>
    )
}

export default Tests;
import './Home.sass'
import {useEffect, useState, useReducer} from "react"
import NumberBar from '../../Components/NumberBar/NumberBar'
import WordsContainer from '../../Components/WordsContainer/WordsContainer'
import Tests from '../../Components/Tests/Tests'
import Score from '../../Components/Score/Score'
import {useDispatch, useSelector} from "react-redux"
import {getOneWord, getWords} from "../../redux/actions/words"

const Home = () => {

    // global variable of main array length
    const arrayLength = 1347
    // const arrayLength = 20

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const answers = useSelector(state => state.words.testAnswers)
    const [verges, setVerges] = useState({from: 0, to: arrayLength})
    const [scroll, setScroll] = useState(verges.from)
    const [showTranslate, setShowTranslate] = useState(false)
    const [randomMode, setRandomMode] = useState(false)
    const [testsMode, setTestsMode] = useState(false)
    const [gameScore, setGameScore] = useState(0)
    const [countQuestions, setCountQuestions] = useState(0)

    const [randomArray, setRandomArray] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        if (randomMode) {
            dispatch(getOneWord( randomArray[scroll] ))
        } else {
            dispatch(getOneWord( scroll + 1 ))
        }
    }, [scroll])

    // change scroll value for user click Left
    const scrollLeft = () => {
        // if (scroll > ( verges.from > 1 ? 1 : 0 ) && !testsMode) {
        if (scroll > verges.from - 1 && !testsMode) {
            setScroll(scroll - 1)
        }
    }

    // change scroll value for user click Right
    const scrollRight = () => {
        if (scroll < verges.to && !testsMode) {
            setScroll(scroll + 1)
        }
    }

    // key actions
    window.onkeydown = function (event) {
        let key = event.keyCode
        if ( key === 37 &&
            !testsMode ) { scrollLeft() }
        if (key === 39 &&
            !testsMode) { scrollRight() }
        if ((key === 32 ||
             key === 38 ||
             key === 40) &&
             !testsMode) { setShowTranslate(!showTranslate) }
        if ((key === 82)) { startRandomMode() }
    }

    const randomNumbers = (quanityNumbers) => {
        const arr = []
        for(let i = 0; i < quanityNumbers; i++) {
            let random = Math.floor(Math.random() * arrayLength )
            if (random === (scroll + 1)) {
                random =+ 10
            }
            arr.push(random)
        }
        dispatch(getOneWord(arr[0]))
        dispatch(getWords(arr))
        setScroll(arr[0] - 1)
    }

    const startRandomMode = () => {
        // if (!testsMode) setRandom()
        // i need array with "globalArray" length random numbers
        // запушити в масив рандомних значень з перевіркою чи це значення не повторилось
        setRandomMode(!randomMode)
        setRandomArray([])
        setScroll(0)
        if (!randomMode) {
            const temp = []
            while ( temp.length < arrayLength ) {
                let randomnumber = Math.ceil( Math.random() * arrayLength )
                if ( temp.indexOf(randomnumber) === -1 ) {
                    temp.push(randomnumber)
                }
            }   
            setRandomArray(temp)
        }
    }

    const startTestMode = () => {
        setTestsMode(!testsMode)
        startTests()
    }

    const startTests = () => {
        randomNumbers(4)
    }

    const vergesInput = (event) => {
        let target = event.target
        // verges[target.name] = (target.value * 1) - ( verges.from > 0 && verges.to > 0 ? 1 : 0 )
        verges[target.name] = (target.value * 1)
        if (verges.from <= 0) verges["from"] = 1
        if (verges.to === 0) verges["to"] = arrayLength
        setScroll(verges.from - 1)
        console.log("verges", verges);
    }

    const setVergesInput = () => {
        setScroll(verges.from)
    }



    return (
        <div className="Home">
            <div className={testsMode ? "contentContainer testMode" : "contentContainer"}>

                <NumberBar
                    scroll={scroll}
                    setScroll={setScroll}
                    startTests={startTests}
                    testsMode={testsMode}
                    arrayLength={arrayLength - 1}
                />

                {
                    testsMode
                        ? <Score
                            gameScore={gameScore}
                            countQuestions={countQuestions}
                          />
                        : null
                }

                <WordsContainer
                    scroll={scroll}
                    startTests={startTests}
                    testsMode={testsMode}
                    scrollLeft={scrollLeft}
                    scrollRight={scrollRight}
                    arrayLength={arrayLength}
                    showTranslate={showTranslate}
                    setShowTranslate={setShowTranslate}
                />

                {
                    testsMode
                        ? <Tests
                            answers={answers}
                            scroll={scroll}
                            gameScore={gameScore}
                            startTests={startTests}
                            setGameScore={setGameScore}
                            showTranslate={showTranslate}
                            countQuestions={countQuestions}
                            setCountQuestions={(value) => setCountQuestions(value)}
                        />
                        : null
                
                }

                <div className="functinality">

                    <div
                        className={!randomMode ? "randomButton disabled" : "randomButton"}
                        onClick={ startRandomMode }
                    >
                        random
                    </div>

                    {/* <div className="vergesInputContainer">
                        <div className="verges">
                            <div className="vergesText">from</div>
                            <input
                                className="vergesInput"
                                type="text"
                                name="from"
                                onChange={ e => vergesInput(e) }
                            />
                        </div>
                        <div className="verges">
                            <div className="vergesText">to</div>
                            <input
                                className="vergesInput"
                                type="text"
                                name="to"
                                onChange={ e => vergesInput(e) }
                            />
                        </div>
                    </div> */}

                    <div
                        className="testButton"
                        onClick={ startTestMode }
                    >
                        {
                            testsMode
                                ? "Stop Test"
                                : "Test Mode"
                        }
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Home;

// useEffect(() => {
//     const createNeedArray = () => {
//         const array = []
//         for(let i = 0; i < original.length; i++) {
//             const arr = {}
//             arr["original"] = original[i]
//             arr["translate"] = translate[i]
//             array.push(arr)
//             console.log("in array :", array[i])
//             // props.postData(array[i])
//         }
//         // console.log("need arr", array);
//     }
//     createNeedArray()
// }, [])
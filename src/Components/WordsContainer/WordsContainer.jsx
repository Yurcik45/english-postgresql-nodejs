import './WordsContainer.sass'
import leftArrow from '../../images/leftArrow.svg'
import rightArrow from '../../images/rightArrow.svg'
import {globalWindowWidth} from '../../globalVariables'
import { useEffect, useMemo, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getOneWord } from '../../redux/actions/words'

const WordsContainer = props => {

    const [needWidth, setNeedWidth] = useState(0)
    const [arrowLocate, setArrowLocate] = useState(false)
    useMemo(() => {
        if (globalWindowWidth > 1000) {
            setNeedWidth(680)
        } else if (globalWindowWidth <= 1000 && globalWindowWidth > 700) {
            setNeedWidth(580)
        } else if (globalWindowWidth <= 700 && globalWindowWidth > 550) {
            setNeedWidth(473)
            setArrowLocate(true)
        } else if (globalWindowWidth <= 550) {
            setNeedWidth(378)
            setArrowLocate(true)
        } 
    }, [])

    const currentWord = useSelector(state => state.words.currentWord)

    const LeftArrow = () => {
        return (
            <div
                className={props.scroll === 0 || props.testsMode ? "arrow noArrow" : "arrow"}
                onClick={props.testsMode
                    ? null
                    : () => { props.scrollLeft()}
                }
            ><img src={leftArrow} alt="left"/></div>
        )
    }
    const RightArrow = () => {
        return (
            <div
                className={props.scroll === props.arrayLength || props.testsMode ? "arrow noArrow" : "arrow"}
                onClick={props.testsMode
                    ? null
                    : () => { props.scrollRight()}
                }
            ><img src={rightArrow} alt="right"/></div>
        )
    }

    return (

        <div className="WordsContainer">

            {
                arrowLocate
                    ? null
                    : <LeftArrow/>
            }

            <div
                onClick={() => { if (!props.testsMode) props.setShowTranslate(!props.showTranslate)}}
                style={{width: needWidth}}
                className={props.canScroll ? "content scrollContent" : "content"}
            >
                <div
                    // style={{transform: `translate(${props.scroll * - needWidth}px, 0)`}}
                    className="wordItem"
                >
                    <div className="word">
                        {
                            props.showTranslate
                                ? currentWord.translate
                                : currentWord.original
                        }
                    </div>
                </div>
            </div>


            {
                arrowLocate
                    ? <div className="mobileArrows">
                        <LeftArrow/>
                        <RightArrow/>
                    </div>
                    : null
            }

            {
                arrowLocate
                    ? null
                    : <RightArrow/>
            }

            
        </div>
    )
}

export default WordsContainer;
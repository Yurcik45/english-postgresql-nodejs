import './NumberBar.sass'

const NumberBar = props => {

    const scr = props.scroll

    const numbers = [
        scr - 3, scr - 2, scr - 1, scr , scr + 1, scr + 2, scr + 3, scr + 4, scr + 5
    ]

    return(
        <div
            className="NumberBar"
        >
            {
                numbers.map((n, id) => {
                    return (
                        <div
                            key={id}
                            className={props.scroll === (n - 1) ? "number light" : "number" }
                            style={{opacity: n <= 0 || n > ( props.arrayLength + 1 ) ? 0 : 1}}
                            onClick={props.testsMode
                                ? () => { props.startTests() ; if (!props.testsMode) props.setScroll(n - 1)}
                                : () => { props.setScroll(n - 1)}
                            }
                        >
                            {n}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NumberBar;

 // const [needWidth, setNeedWidth] = useState(0)
    // useMemo(() => {
    //     if (globalWindowWidth > 1000) {
    //         setNeedWidth(715)
    //     } else if (globalWindowWidth <= 1000 && globalWindowWidth > 700) {
    //         setNeedWidth(650)
    //     } else if (globalWindowWidth <= 700 && globalWindowWidth > 550) {
    //         setNeedWidth(470)
    //     } else if (globalWindowWidth <= 550) {
    //         setNeedWidth(380)
    //     } 
    //     // else if (globalWindowWidth <= 450 && globalWindowWidth > 300) {
    //     //     setNeedWidth(290)
    //     // }
    //     console.log("need numbers width", needWidth);
    // }, [])
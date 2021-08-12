import Home from './Pages/Home/Home'

// import { useDispatch } from "react-redux"
// import { useMemo } from "react"
// import { postWord } from "./redux/actions/words"
// import { words } from './words'

const App = () => {
  return (
    <Home/>
  );
}

export default App;

  // code to download new list words

  // const dispatch = useDispatch()
  // useMemo(() => {
  //   const original = []
  //   const translate = []
  //   words.map((word) => {
  //     original.push(word.split("--")[0])
  //     translate.push(word.split("--")[1])
  //   })
  //   for (let i = 0; i < words.length; i++) {
  //     let temp = {
  //       "original": original[i],
  //       "translate": translate[i]
  //     }
  //   // let temp = {
  //   //   original: "test",
  //   //   translate: "1"
  //   // }
  //     dispatch(postWord(temp))
  //   }
  // }, [])
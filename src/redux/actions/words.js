import axios from "axios"
import {
    GET_WORD_SUCCESS,
    GET_WORD_FAILED,
    GET_WORDS_SUCCESS,
    GET_WORDS_FAILED,
    POST_WORD_SUCCESS,
    POST_WORD_FAILED,
    DELETE_WORD_SUCCESS,
    DELETE_WORD_FAILED
} from "../types"
import {server} from "../server"

export const getOneWord = id => dispatch => {
    const config = {
        headers: {
          "Content-Type": 'application/json',
          // "Origin":'http://localhost:3000', 
          // "Accept": 'application/json, text/plain, */*',
          // "Access-Control-Allow-Origin": `http://localhost:3000`
        }
      };
      const requestUrl = `${server}api/home/${id}`;
    
      axios
        .get(requestUrl, config)
        .then((response) => {
          dispatch({ type: GET_WORD_SUCCESS, payload: response.data });
          // console.log("GET_WORD_SUCCESS", response.data);
        })
        .catch(function (error) {
          dispatch({ type: GET_WORD_FAILED, payload: error });
          console.warn("GET_WORD_FAILED", error)
        });
}

export const getWords = (words_id = [123, 423, 543, 654]) => dispatch => {


  const config = {
      headers: {
          "Content-Type": "application/json"
      }
  };

  const requestUrl = `${server}api/home/?ids=${words_id.map(n => n)}`

  axios
  .get(requestUrl, config)
  .then((response) => {
    dispatch({ type: GET_WORDS_SUCCESS, payload: response.data });
    // console.log("data", response.data);
  })
  .catch(function (error) {
    dispatch({ type: GET_WORDS_FAILED, payload: error });
    console.warn("GET_WORDS_FAILED", error)
  });

}

export const postWord = (word = {original: "all", translate: "все"}) => dispatch => {

  console.log("post data", word);
    const config = {
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(word)
      };
      const requestUrl = `${server}api/home`;
    
      axios
        .post(requestUrl, config)
        .then((response) => {
          dispatch({ type: POST_WORD_SUCCESS, payload: response.data });
          console.warn("POST_WORD_SUCCESS", response.data)
        })
        .catch(function (error) {
          dispatch({ type: POST_WORD_FAILED, payload: error });
          console.warn("POST_WORD_FAILED", error)
        });
}


export const deleteWord = id => dispatch => {
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const requestUrl = `${server}api/home/${id}`;
    
      axios
        .delete(requestUrl, config)
        .then((response) => {
          dispatch({ type: DELETE_WORD_SUCCESS, payload: response.data });
        })
        .catch(function (error) {
          dispatch({ type: DELETE_WORD_FAILED, payload: error });
        });
}


// const deleteData = () => {
//     // for(let i = 97; i <= 312; i++) {
//       const url = `api/home/596`
    
//       fetch(url, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8'
//         }
//       })
//       .then(async (response) => {
//         console.log("RESP DELETE", response);
//       })
//       .catch(error => {
//         console.log("FRONT DELETE ERROR", error);
//       }) 
//     }

//   const postData = (body) => {
//     const url = 'api/home'
    
//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify(body)
//     })
//     .then(async (response) => {
//       const data = await response.json()
    
//       console.log("RESP POST", data);
//     })
//     .catch(error => {
//       console.log("FRONT POST ERROR", error);
//     }) 
//   }




  // const getData = (id) => {
//     const url = `api/home/${id}`
    
//     fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//     })
//     .then(async (response) => {
//       const data = await response.json()
//       // console.log("RESP GET", data);
//       gettingDdataHandler({"original": data.original, "translate": data.translate})
//     })
//     .catch(error => {
//       console.log("FRONT GET ERROR", error);
//     }) 
//   }

//   const getAnswers = (random) => {
//     const arr = [];
//     random.map((r) => {
//       const url = `api/home/${r + 1}`
    
//       fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8'
//         },
//       })
//       .then(async (response) => {
//         const data = await response.json()
//         console.log(" RANDOM RESP GET", data);
//         arr.push(data)
//         console.log("ANSWERS", arr)
//       })
//       .catch(error => {
//         console.log("RANDOM GET ERROR", error);
//       }) 
//     })
//     randomAnswersHandler(arr)
//   }
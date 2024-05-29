import * as GET from "./types"



const initialState = {
   genre: [],
    movie: {},
    genreMovie: {},


}


const reducer = (state=initialState, action) => {
   switch(action.type) {
    
    case GET.FETCH_GENRES: {
       return {

        ...state,
        genre: [],
   }

       } 

       case GET.FETCH_GENRES_SUCCESS : {

       return {
            ...state,
            genre:action.payload
        }
       }


       case GET.FETCH_GENRES_FAILURE: {

        return {
            ...state,
            error: action.error.message
            
        }
       }


       default:
return  state

}

}
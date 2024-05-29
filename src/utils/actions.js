


const genreList = async () => {
  

const fetch = async (dispatch) => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY'
      }
    };


return  async (dispatch) => {
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)
    dispatch({ type: 'FETCH_GENRES', payload: data })
  }

}


}



    
    
    export default genreList;

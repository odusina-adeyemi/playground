import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchGenres} from '../../redux/actions/genreActions';
import {Link} from 'react-router-dom';


const GenreList = () => {

    const genres = useSelector(state => state.genre)
    const dispatch = useDispatch()

   useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch])

  return (
    <div>

      {genres.length> 0 && genres.map(genre => {
        return (
            <div>
                <p>{genre.name}</p>
                {/* <Link to={`/genre/${genre.id}`}>{genre.name}</Link> */}
            </div>
        )
      })}

    </div>
  )
}

export default GenreList
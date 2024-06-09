import { useParams } from 'react-router'
import { useCategoriesQuery, useSearchQuery } from '../../store/movieApiSlice'
import background from "../../asset/images/HomePageBackground.jpg";
import Loading from '../../components/Loading';
import MovieList from '../../components/MovieList';

const SearchPage = () => {
    const search = useParams().search
    const {data,isLoading} = useSearchQuery({search});
    const {data:categories} = useCategoriesQuery()

  return (
    <>

        <div className='homePage' style={{backgroundImage: `url(${background})`}}>
            <div className="cardContainer">
            {isLoading?<Loading/>:
                <MovieList data={data?.results} categories={categories?.genres}/>
            }
            </div>
        </div>
    </>
  )
}

export default SearchPage
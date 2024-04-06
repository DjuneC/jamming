import NavBar from "../NavBar/NavBar"
import Searchbar from "../SearchBar/Searchbar"
import Tracklist from "../Tracklist/Tracklist"

const Home = ({handleSubmit, handleChange, queryValue, data}) => {
  return (
    <>
      <NavBar />
      <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} queryValue={queryValue} />
      <Tracklist songs={data}/>
    </>
  )
}

export default Home
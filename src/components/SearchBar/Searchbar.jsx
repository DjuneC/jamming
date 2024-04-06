import Button from "../Button/Button"

const Searchbar = ({handleSubmit, handleChange, queryValue}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" id="query" placeholder="ex: Justin Bieber" onChange={handleChange} value={queryValue}/>
        <Button text='Search' type='submit'/>
      </form>
    </div>
  )
}

export default Searchbar
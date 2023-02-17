function SearchCity({ city, handleChange, setCity }) {
  return (
    <form onSubmit={handleChange} className="mx-3 mt-5">
      <input
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchCity;

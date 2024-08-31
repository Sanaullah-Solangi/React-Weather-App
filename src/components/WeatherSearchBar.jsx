function WeatherSearchBar({ onKeypress, onClick }) {
  return (
    <div className="weatherSearchBar flex items-center justify-center w-full gap-4 ">
      <input
        onKeyPress={onKeypress}
        id="searchBar"
        type="search"
        name="searchBar"
        className="border-none py-3 px-4 rounded-3xl flex items-center justify-center flex-1"
        placeholder="Enter city name"
      />
      <label htmlFor="searchBar" onClick={onClick}>
        <i className="fa-solid fa-magnifying-glass searchIcon rounded-full bg-white text-gray-400 p-4 radius-50per d-flex jc-center al-center"></i>
      </label>
    </div>
  );
}
export default WeatherSearchBar;

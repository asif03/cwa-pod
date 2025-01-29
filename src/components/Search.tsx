import searchIcon from "../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="relative items-center justify-end">
      <button
        className="absolute right-1 border-l-2 px-2 py-2 pt-2.5"
        type="submit"
      >
        <img src={searchIcon} alt="Button Search" className="" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border py-2 pr-12 pl-2"
      />
    </div>
  );
};
export default Search;

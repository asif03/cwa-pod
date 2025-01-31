import searchIcon from "../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="relative items-center justify-end">
      <button
        className="absolute right-1 cursor-pointer border-l-1 border-[#DEE1E8] px-2 py-2 pt-3.5"
        type="button"
      >
        <img src={searchIcon} alt="Button Search" className="h-5 w-5" />
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

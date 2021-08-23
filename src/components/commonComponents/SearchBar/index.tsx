const SearchBar = ({ onChange }: any) => {
  
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };
  
  return (
    <input
      type="text"
      className="input"
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;

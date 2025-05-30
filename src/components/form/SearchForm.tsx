type SerachFormProps = {
  
  userName?: string,
  setUserName: React.Dispatch<React.SetStateAction<string>>;

}

const SearchForm = ({userName, setUserName}: SerachFormProps) => {
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm
export const SearchForm = ({serchText, func}) => {
return(
    <form >
            <input type="text" value={serchText} onChange={func}/>
    </form>
)
};
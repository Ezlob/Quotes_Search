interface SearchBoxProps {
    search: string;
    setSearch: (arg: string) => void;
}

export const SearchBox = ({search, setSearch}: SearchBoxProps) => {
    return (
        <input 
            className="search-term"
            type="text" 
            value={search}
            placeholder="Albert Einstein"
            onChange={e => setSearch(e.target.value)}
        />
    )
}
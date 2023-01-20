import { useState, useEffect } from "react"
import { DisplayQuote } from "../components/DisplayQuote";
import { QuoteCard } from "../components/QuoteCard";
import { SearchBox } from "../components/SearchBox";

interface Quote {
    id: string;
    author: string;
    content: string;
}

export const Quotes = () => {
    const [randQuote, setQuote] = useState<Quote>({id: '', author: '', content: ''});
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [search, setSearch] = useState("");

    const searchForAuthor = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        quotes.length = 0;
        
        fetch(`https://api.quotable.io/quotes?query=${search}&fields=author`)
            .then((result) => result.json())
            .then((data) => {
                data.results.forEach((item: any) => {
                    const newQuote: Quote = {
                        id: item._id,
                        author: item.author,
                        content: item.content
                    }
                    quotes.push(newQuote);
                })
                setQuote({id: '', author: '', content: ''});
                setQuotes([...quotes]);
            });
    }

    const getRandomQuote = async () => {
        fetch(`https://api.quotable.io/random`)
            .then((result) => result.json())
            .then((data) => {
                const quote: Quote = {
                    id: data._id,
                    author: data.author,
                    content: data.content
                };

                setQuote(quote);
            });
    }

    useEffect(() => {
        getRandomQuote();
    }, [])

    return (
        <div className="container">
            <div className={quotes.length > 0 ? "quotes-list-page" : "quotes-page"}>
                <h1>Quote Search</h1>
                <form className="search-box" onSubmit={(e) => { searchForAuthor(e) }}>
                    <SearchBox search={search} setSearch={setSearch} />
                </form>
            </div>
            <div className="random-quote">
                <DisplayQuote id={randQuote.id} author={randQuote.author} content={randQuote.content}/>
            </div>
            <div className="quotes">
                {
                    quotes.map((quote) => (
                        <QuoteCard id={quote.id} author={quote.author} content={quote.content} />
                    ))
                }
            </div>
        </div>
    )
}
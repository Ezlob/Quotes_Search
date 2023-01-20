interface DisplayQuoteProps {
    id: string;
    author: string;
    content: string;
}

export const DisplayQuote = ({id, author, content}: DisplayQuoteProps) => {
    if(id != '') {
        return (
            <div key={id} className="random-quote">
                <div>{content}</div>
                <div className={"author-name display-author"}>-{author}</div>
            </div>
        )
    }
    return (null);
}
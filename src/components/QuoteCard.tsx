interface QuoteCardProps {
    id: string;
    content: string;
    author: string;
}

export const QuoteCard = ({id, author, content}: QuoteCardProps) =>{
    return (
        <div className="card" key={id}>
            <div>{content}</div>
            <div className="author-name">-{author}</div>
        </div>
    )
}
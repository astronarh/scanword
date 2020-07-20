import React from "react";
import './Scanword.css'

const Scanword = ({scanword, columns, open}) => {
    const {
        title,
        author,
        size,
        difficulty,
        objectID
    } = scanword;

    const ButtonInline = ({onClick, type = 'button', children}) =>
        <Button type={type} className="button-inline" onClick={onClick}>
            {children}
        </Button>

    const Button = ({onClick, className, type = 'button', children}) =>
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>

    return (
        <div className="scanword">
            <span style={{width: columns.title.width}}>
                {title}
            </span>
            <span style={{width: columns.author.width}}>
                {author}
            </span>
            <span style={{width: columns.size.width}}>
                {size}
            </span>
            <span style={{width: columns.difficulty.width}}>
                {difficulty}
            </span>
            <span style={{ width: columns.open.width }}>
                <ButtonInline onClick={() => open(objectID)}>
                    Open
                </ButtonInline>
            </span>
        </div>
    )
}

export default Scanword;

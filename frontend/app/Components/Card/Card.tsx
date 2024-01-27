import "./Card.css"

type CardProps = {
    children: React.ReactNode,
    varient?: string,
    style?: React.CSSProperties
}

export const Card = (props: CardProps) => {
    return (
        <div className="cardMain" style={{ ...props.style }}>
            {props.children}
        </div>
    )
}
import "./Card.css"

type CardProps = {
    children: React.ReactNode,
    varient?: string
}

export const Card = (props:CardProps) => {
    return (
        <div className="cardMain">
            {props.children}
        </div>
    )
}
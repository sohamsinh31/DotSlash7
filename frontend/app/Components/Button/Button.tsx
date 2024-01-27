import "./Button.css"

type BtnProps = {
    children: React.ReactNode,
    bgColor?: string,
    color?: string,
    width?: string,
    height?: string,
    style?: React.CSSProperties,
    onClick?: () => void
}

export const Button = (props: BtnProps) => {
    return (
        <button
            className="button"
            style={{
                backgroundColor: props.bgColor ? props.bgColor : "none",
                ...props.style
            }}
        >
            {props.children}
        </button>
    )
}
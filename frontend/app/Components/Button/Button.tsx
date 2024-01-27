type BtnProps = {
    children: React.ReactNode
}

export const Button = (props: BtnProps) => {
    return (
        <Button>
            {props.children}
        </Button>
    )
}
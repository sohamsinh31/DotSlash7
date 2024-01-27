import Button from "../Button"
import { Searchbar } from "../SearchBar/searchbar"
import "./Navbar.css"

type NavProps = {
    title: string
}

export const Navbar = (props: NavProps) => {
    return (
        <div>
            <div className="navbar">
                <Button height="28px">Previous</Button>
                {/* <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div> */}
                <Searchbar />
                <Button height="28px">Next</Button>
            </div>
            <div className="titleBar">
                <h1>{ props.title }</h1>
            </div>
        </div>
    )
}
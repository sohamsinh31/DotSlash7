import { Button } from "../Button/Button"
import { Searchbar } from "../SearchBar/searchbar"
import "./Navbar.css"

export const Navbar = () => {
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
                <h1>Introduction to C</h1>
            </div>
        </div>
    )
}
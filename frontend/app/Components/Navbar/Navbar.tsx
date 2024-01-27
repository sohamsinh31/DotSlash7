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
                <h2>Introduction to C</h2>
            </div>
        </div>
    )
}
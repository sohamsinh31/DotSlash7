import Button from "../Button"
import Card from "../Card"
import "./Content.css"

export const Content = () => {
    return (
        <div className="content">
            <div className="upperBar">
                <div className="textbar">
                    <h3>What is C?</h3>
                    C is a general-purpose, procedural, high-level programming language used in the development of computer software and applications, system programming, games, web development, and more.
                    <ul>
                        <li>C language was developed by Dennis M. Ritchie at the Bell Telephone Laboratories in 1972.</li>
                        <li>It is a powerful and flexible language which was first developed for the programming of the UNIX operating System.</li>
                        <li>C is one of the most widely used programming languages.</li>
                        <li>C programming language is known for its simplicity and efficiency. It is the best choice to start with programming as it gives you a foundational understanding of programming.</li>
                    </ul>
                </div>
                <div className="imageBar">
                    <img className="imageR" src="Assets/clang.png" alt="" />
                </div>
            </div>
            <div className="lowerBar">
                <div className="codeBar">
                    <Card><Button style={{color: 'blue'}}>Run</Button></Card>
                </div>
            </div>
        </div>
    )
}
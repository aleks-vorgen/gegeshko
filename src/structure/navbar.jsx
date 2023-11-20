import {useRef} from "react";
import {Link} from "react-router-dom";

export function Navbar() {
    const refHome = useRef(null);
    const refAbout = useRef(null);
    function navButton_MouseOut(ref) {
        let current = ref.current.children[1].style;
        current.animation = "scale-up-hor-center 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both";
    }

    function navButton_MouseIn(ref) {
        let current = ref.current.children[1].style;
        current.animation = "scale-down-hor-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }

    return (
        <div id="navbar">
            <div className="nav-button" ref={refHome}>
                <Link to="/"
                   onMouseEnter={() => navButton_MouseIn(refHome)}
                   onMouseOut={() => navButton_MouseOut(refHome)}>
                    Головна
                </Link>
                <span className="nav-link-underline"/>
            </div>
            <div className="nav-button" ref={refAbout}>
                <Link to="/about"
                   onMouseEnter={() => navButton_MouseIn(refAbout)}
                   onMouseOut={() => navButton_MouseOut(refAbout)}>
                    Про мене
                </Link>
                <span className="nav-link-underline"/>
            </div>
        </div>
    )
}
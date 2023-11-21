import {Directions} from "../components/home/directions.jsx";
import {PreregistrationForm} from "../components/home/preregistration-form.jsx";
import {Biography} from "../components/home/biography.jsx";
import {Contacts} from "../components/home/contacts.jsx";

export function Home() {

    return (
        <div id="home">
            <Directions/>
            <PreregistrationForm/>
            <Biography/>
            <Contacts/>
            <div className="home-experience">

            </div>
            <div className="home-footer">

            </div>
        </div>
    )
}
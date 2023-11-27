import {Directions} from "../components/home/directions.jsx";
import {PreregistrationForm} from "../components/home/preregistration-form.jsx";
import {Biography} from "../components/home/biography.jsx";
import {Contacts} from "../components/home/contacts.jsx";
import {Achievements} from "../components/home/Achievements.jsx";

export function Home() {

    return (
        <div id="home">
            <Directions/>
            <PreregistrationForm/>
            <Biography/>
            <Contacts/>
            <Achievements/>
            <div className="home-footer">

            </div>
        </div>
    )
}
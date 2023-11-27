import {Directions} from "../components/home/directions.jsx";
import {PreregistrationForm} from "../components/home/preregistration-form.jsx";
import {Biography} from "../components/home/biography.jsx";
import {Contacts} from "../components/home/contacts.jsx";
import {Achievements} from "../components/home/achievements.jsx";
import {Footer} from "../components/home/footer.jsx";

export function Home() {

    return (
        <div id="home">
            <Directions/>
            <PreregistrationForm/>
            <Biography/>
            <Contacts/>
            <Achievements/>
            <Footer/>
        </div>
    )
}
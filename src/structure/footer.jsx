import {useRef} from "react";

export function Footer() {
    const refFacebook = useRef(null);
    const refTelegram = useRef(null);
    const refWhatsapp = useRef(null);
    const refViber = useRef(null);

    function social_MouseOut(ref) {
        let current = ref.current.children[0].style;
        current.animation = "scale-down-center 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000) both";
    }

    function social_MouseIn(ref) {
        let current = ref.current.children[0].style;
        current.animation = "scale-up-center 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000) both";
    }

    return (
        <div id="footer">
            <div className="socials">
                <a href="https://www.facebook.com/profile.php?id=61552555611669"
                   target="_blank" rel="noreferrer" ref={refFacebook}>
                    <img src="/images/socials/footer/facebook.svg" alt="facebook.svg"
                         onMouseEnter={() => social_MouseIn(refFacebook)}
                         onMouseOut={() => social_MouseOut(refFacebook)}/>
                </a>
                <a href="https://t.me/VitaliyVasilevi"
                   target="_blank" rel="noreferrer" ref={refTelegram}>
                    <img src="/images/socials/footer/telegram.svg" alt="telegram.svg"
                         onMouseEnter={() => social_MouseIn(refTelegram)}
                         onMouseOut={() => social_MouseOut(refTelegram)}/>
                </a>
                <a href="https://wa.me/3800506287550"
                   target="_blank" rel="noreferrer" ref={refWhatsapp}>
                    <img src="/images/socials/footer/whatsapp.svg" alt="whatsapp.svg"
                         onMouseEnter={() => social_MouseIn(refWhatsapp)}
                         onMouseOut={() => social_MouseOut(refWhatsapp)}/>
                </a>
                <a href="viber://chat?number=%2B0506287550"
                   target="_blank" rel="noreferrer" ref={refViber}>
                    <img src="/images/socials/footer/viber.svg" alt="viber.svg"
                         onMouseEnter={() => social_MouseIn(refViber)}
                         onMouseOut={() => social_MouseOut(refViber)}/>
                </a>
            </div>
            <div className="copyrights">
                Усі права захищені © 2023
            </div>
        </div>
    )
}
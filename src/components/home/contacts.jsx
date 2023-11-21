export function Contacts() {
    return (
        <div className="home-contacts">
            <div className="sub-title">
                <div className="side-line"></div>
                <span className="title">Контакти</span>
                <div className="side-line"></div>
            </div>
            <div className="content">
                <div className="image">
                    <img src="/images/home-logo.svg" alt=""/>
                </div>
                <div className="preregistration-form">
                    <div className="title">Попередній запис</div>
                    <form action="">
                        <input type="text" placeholder="Ваше ім'я"/>
                        <input type="text" placeholder="Контактний телефон"/>
                        <button>Передзвонити мені</button>
                    </form>
                </div>
                <div className="divider"></div>
                <div className="contacts">
                    <div className="title">Контакти</div>
                    <div className="phone-number">+380 (050) 628 75 50</div>
                    <div className="email">vitaliy@gmail.com</div>
                    <div className="socials">
                        <img src="/images/socials/facebook.svg" alt=""/>
                        <img src="/images/socials/telegram.svg" alt=""/>
                        <img src="/images/socials/whatsapp.svg" alt=""/>
                        <img src="/images/socials/viber.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
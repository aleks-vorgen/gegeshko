export function Header() {
    return (
        <div id="header">
            <div className="header-logo">
                <img src="/header-logo.svg" alt="logo"/>
                <div className="logo-info">
                    <div className="logo-title">Гегешко</div>
                    <div className="logo-text">Лікар психіатр - нарколог</div>
                </div>
            </div>
            <div className="header-address">
                <div className="address-title">
                    Адреса
                </div>
                <div className="address-text">
                    м. Суми,<br/>
                    вул. Леваневського, 28
                </div>
            </div>
            <div className="header-schedule">
                <div className="schedule-title">
                    Графік роботи
                </div>
                <div className="schedule-text">
                    За попереднім записом
                </div>
            </div>
            <div className="header-contacts">
                <div className="contacts-title">
                    Записатися на прийом
                </div>
                <div className="contacts-text">
                    +380 (050) 628 75 50
                </div>
            </div>
        </div>
    )
}
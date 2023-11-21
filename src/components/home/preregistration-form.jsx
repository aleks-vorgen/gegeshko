export function PreregistrationForm() {

    return (
        <div className="home-preregistration-form">
            <div className="sub-title">
                <div className="side-line"></div>
                <span className="title">Попередній запис</span>
                <div className="side-line"></div>
            </div>
            <div className="under-title">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                З вами зв'яжуться, дадуть відповідь на ваші запитання,
                а також запишуть на прийом
            </div>
            <form action="" className="preregistration-form">
                <input type="text" placeholder="Ваше ім'я"/>
                <input type="text" placeholder="Контактний телефон"/>
                <button>Передзвонити мені</button>
            </form>
        </div>
    )
}
export function MainDescription() {
    return (
        <div className="main-description">
            <div className="description">
                <div className="img">
                    <img src="images/profile-vertical.png" alt=""/>
                </div>
                <div>
                    <div className="title">Лікар вищої категорії</div>
                    <div className="sub-title">Нарколог, психіатр, психотерапевт</div>
                    <div className="about">
                        Вітаю! Я Гегешко Віталій Васильович лікар психіатр-нарколог вищої категорії,
                        кандидат медичних наук. Мій досвід роботи в практичній медицині 18 років. Весь цей
                        час працюю у відділенні детоксикації та інтенсивної терапії КНП СОР «ОКМЦСНЗ».
                        Також займаюсь науковою та викладацькою діяльністю на кафедрі нейрохірургії та
                        неврології медичного інституту Сумського державного університету. Маю приватну
                        медичну практику.
                    </div>
                    <div className="services">
                        <div className="left-border">
                            <div className="circle"/>
                            <div className="circle"/>
                        </div>
                        <div>
                            <div className="title">
                                Послуги
                            </div>
                            <ul>
                                <li>Кодування</li>
                                <li>Сеанси психотерапії</li>
                                <li>Гіпноз</li>
                                <li>Детоксикація</li>
                            </ul>
                            <div className="title mt-5">
                                Лікування захворювань
                            </div>
                            <ul>
                                <li>Алкогольна залежність</li>
                                <li>Наркотична залежність</li>
                                <li>Нікотинова залежність</li>
                                <li>Ігрова залежність</li>
                                <li>Співзалежність</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
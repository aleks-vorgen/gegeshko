export default function JobsEducation() {

    const jobs = [
        {
            year: '2004-2005',
            icon: '/images/jobs/med2004.svg',
            title: 'Медичний факультет',
            text: 'Cумський Державний Університет. Я маю 25 наукових праць, з яких 5 – у спеціалізованих професійних виданнях, затверджених ДАК МОН України (всі одноосібні), 4 впровадження'
        },
        {
            year: '2005-2019',
            icon: '/images/jobs/psycho2005.svg',
            title: 'Спеціалізація з психіатрії, наркологія, психотерапії',
            text: 'Заочна аспірантура при відділі профілактики та лікування алкоголізму ДУ «Інститут неврології, психіатрії та наркології АМН України»'
        },
        {
            year: '2016-2017',
            icon: '/images/jobs/narco2016.svg',
            title: 'Наркологія',
            text: 'Захистив дисертацію на здобуття наукового ступеню – кандидата медичних наук за спеціальністю'
        }
    ];

    const education = [
        {
            icon: '/images/education/med-center.svg',
            title: 'Медичний центр',
            text: 'КНП СОР «Обласний клінічний медичний центр соціально небезпечних захворювань». Відділення інтенсивної терапії та детоксикації'
        },
        {
            icon: '/images/education/private-practice.svg',
            title: 'Приватна практика',
            text: 'ФОП «Гегешко В.В.». Приватна практика з наркології'
        }
    ]

    return (
        <div className="jobs-education">
            <div className="sub-title">
                <div className="side-line"></div>
                <span className="title">Досвід & освіта</span>
                <div className="side-line"></div>
            </div>

            <table className="ml-[130px]">
                <tbody>
                {education.map(education => (
                    <tr key={education.title}>
                        <td className="date-year"></td>
                        <td className="img"><img src={education.icon} alt="" className="block max-w-max"/></td>
                        <td>
                            <div className="content-box">
                                <div className="sub-title">{education.title}</div>
                                <div className="text">{education.text}</div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="divider">
                <div></div>
            </div>

            <table>
                <tbody>
                {jobs.map(job => (
                    <tr key={job.title}>
                        <td className="date-year">{job.year}</td>
                        <td className="img"><img src={job.icon} alt="" className="block max-w-max"/></td>
                        <td>
                            <div className="content-box">
                                <div className="sub-title">{job.title}</div>
                                <div className="text">{job.text}</div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
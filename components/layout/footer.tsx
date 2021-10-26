import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {CustomPageProps} from "../../shared/types/custom-page-props.type";

export default function Footer({config}: CustomPageProps) {

    const profiles = [
        {icon: <FontAwesomeIcon size={"2x"} icon={faGithub}/>, url: config.profiles.github},
        {icon: <FontAwesomeIcon size={"2x"} icon={faLinkedin}/>, url: config.profiles.linkedin}
    ]
    return <footer className={"flex flex-col justify-center py-10  space-x-2 text-center"}>
        <div className={"flex justify-center  space-x-4 "}>
            {
                profiles.map(e => (
                    <a key={e.url} href={e.url} rel={"nofollow noreferrer"} target={"_blank"}
                       className={"text-primary hover:opacity-50 "}>
                        {e.icon}
                    </a>
                ))
            }
        </div>
        <p className={"text-xs text-primary mt-2"}>Developed with next.js and tailwindcss</p>

    </footer>
}
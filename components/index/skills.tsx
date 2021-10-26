import {CustomPageProps} from "../../shared/types/custom-page-props.type";

export default function Skills({config}: CustomPageProps) {
    const {frameworks, languages, workExamples} = config
    return (
        <div className={"p-4  rounded-md max-w-4xl mx-auto  my-2"}>
            <h2 className={"text-3xl text-center mb-4 font-bold"}>Skills</h2>
            <div className={"grid sm:grid-cols-3"}>
                <div className={"text-center px-4 mb-3"}>
                    <h3 className={"mb-2 text-gray-200 font-bold"}>Languages</h3>
                    {languages.map(e => (
                        <p key={e}>
                            {e}
                        </p>
                    ))}
                </div>
                <div className={"text-center px-4 mb-3"}>
                    <h3 className={"mb-2 text-gray-200 font-bold"}>Frameworks/Tooling</h3>
                    {frameworks.map(e => (
                        <p key={e}>
                            {e}
                        </p>
                    ))}
                </div>
                <div className={"text-center px-4 mb-3"}>
                    <h3 className={"mb-2 text-gray-200 font-bold"}>What I can build</h3>
                    {workExamples.map(e => (
                        <p key={e}>
                            {e}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
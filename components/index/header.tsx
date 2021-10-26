import {CustomPageProps} from "../../shared/types/custom-page-props.type";

export default function Header({config}: CustomPageProps) {
    return (
        <header className={"p-4 bg-secondary rounded-md max-w-4xl mx-auto py-14 space-y-3 "}>
            <h1 className={"text-center text-4xl "}>
                Software Developer
            </h1>
            <p className={"text-center text-xl font-bold "}>Richard T.</p>

            <p className={"text-center text-xs font-bold max-w-sm mx-auto "}>
                I have been developing software since 2010, and working on freelance projects since 2014. I work
                on both the front and back end for desktop, mobile
                and web
                applications</p>


            <div
                className={"flex justify-center  space-x-2 space-y-2 flex-wrap max-w-xs  items-center p-3 rounded-md mx-auto  relative"}

            >

                {
                    config.images.map(e => (
                        <img key={e} className={"h-5 "} alt={e} src={`/skills/${e}`}/>

                    ))
                }

            </div>

        </header>
    )
}
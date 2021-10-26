import {CustomPageProps} from "../../shared/types/custom-page-props.type";

export default function RecentProjects({config}: CustomPageProps) {

    return (
        <div className={" rounded-md max-w-4xl mx-auto  my-2"}>
            <h2 className={"text-3xl text-center mb-4 font-bold"}> Recent Projects</h2>

            {config.projects.map(e => {
                return (
                    <div key={e.title} className={"p-3 mb-2 rounded-md bg-secondary space-y-2"}>
                        <p className={" font-bold "}>{e.title}</p>
                        <a href={e.url} target={"_blank"} rel={"noreferrer nofollow"}
                           className={"text-xs underline break-words"}>{e.url}</a>
                        <p className={"text-sm"}>{e.description}</p>
                        <div className={"flex flex-wrap gap-1"}>
                            {e.tags.map(tag => (
                                <span
                                    key={tag}
                                    className={"bg-main text-white font-bold p-2 rounded-md text-xs "}>{tag}</span>
                            ))}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
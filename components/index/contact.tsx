import {useForm, ValidationError} from '@formspree/react';
import {XCircleIcon} from '@heroicons/react/solid'
import {CustomPageProps} from "../../shared/types/custom-page-props.type";


export default function Contact({config}: CustomPageProps) {
    const [submitState, onSubmit] = useForm(config.formSpreeId);

    return (
        <div className={"rounded-md max-w-4xl mx-auto text-center"}>

            <h2 className={"text-3xl text-center font-bold"}>Contact</h2>

            {
                !submitState.succeeded ?
                    <p className={"text-sm mx-auto text-center mb-4 max-w-xs"}>
                        I am open to full time and freelancing opportunities.
                        Interested in a quote?
                    </p> : <></>
            }


            {
                submitState.succeeded ?
                    <>
                        <div className={"bg-secondary mx-auto max-w-md rounded-md py-4 mt-2"}>
                            <p className={"text-green-400  "}>Thank you for getting in touch!
                            </p>
                            <p className={"text-green-400  "}>I will get back to you within 48 hours
                            </p>
                        </div>
                    </>

                    :

                    <>
                        {submitState.errors && submitState.errors.length > 0 ?
                            <div className="rounded-md bg-red-50 p-1 text-left text-xs max-w-xl mx-auto mb-2">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">There
                                            were {submitState.errors.length} errors with your
                                            submission</h3>
                                        <div className=" text-red-700">
                                            <ul role="list" className="list-disc pl-5 space-y-1">
                                                {
                                                    submitState.errors.map(e => (
                                                        <li key={e.code}>{e.message}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> : <></>
                        }

                        <form className={"flex flex-col space-y-4 max-w-xl mx-auto bg-secondary p-4 rounded-md  "}
                              onSubmit={onSubmit}
                        >

                            <div className={"flex flex-col items-start rounded-t-xl"}>
                                <label className={"text-xs font-bold"}>Your Email</label>
                                <input type={"text"} className={"rounded-sm p-2 w-full text-black"}
                                       name="_replyto"/>
                            </div>

                            <div className={"flex flex-col items-start"}>
                                <label className={"text-xs font-bold"}>Your Message</label>
                                <textarea rows={4} className={"rounded-sm p-2 w-full text-black"}
                                          name="message"/>
                            </div>


                            {submitState.submitting ?
                                <button type="button"
                                        className={`mx-auto bg-white inline-flex items-center px-4 py-2  font-bold rounded-md text-main hover:opacity-80 focus:border-main ring-2 ring-white ring-offset-main ring-offset-4  cursor-not-allowed`}
                                        disabled>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 " xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"/>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                    </svg>
                                    Sending
                                </button>
                                :

                                <button type="submit"
                                        className={`mx-auto bg-white inline-flex items-center px-4 py-2   font-bold rounded-md text-main hover:opacity-80 focus:border-main ring-2 ring-white ring-offset-main ring-offset-4`}
                                >
                                    Submit
                                </button>

                            }
                        </form>
                    </>

            }


        </div>
    )
}
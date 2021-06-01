import Link from "next/link";

function IndividualBlogDetails(props) {
    const event = props.details
    const cat = (event.categories).split(", ");
    let count = 1;
    return (
        <div key={event.slug} className={`border-b shadow rounded-md hover:shadow-lg hover:border`}>
            <div className={`ml-4 mt-4`}>
                <Link href={`/blog/${encodeURIComponent(event.slug)}` }>
                    <a className={`hover:text-cyan-500`}>
                        <h1 className={`font-bold text-2xl`}>{event.title}</h1>
                    </a>
                </Link>
            </div>
            <p className={`ml-4 mt-4`}>{event.description}</p>
             {/*Posted Date*/}
            <div className="ml-4 mt-8 flex">
                <p>
                    <span className={`text-gray-400`}>Published: </span>
                    <small>
                        <time className={`hover:underline hover:text-cyan-500`}>{humanReadableDate(event.date)}</time>
                    </small>
                </p>
                {/*Categories Belongs to*/}
                <div className={`ml-10 mb-4`}>
                    {
                        cat.map
                        ( event =>
                            <span key={cat + count++} className={`inline-block bg-cyan-200 text-cyan-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide mr-2`}>
                                <Link href={`/?categories=${encodeURIComponent(event)}` }>
                                    <a className={`hover:underline`}>{event}</a>
                                </Link>
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function humanReadableDate(date) {
    return new Date(date).toLocaleDateString(
        undefined,
        {year: "numeric", month: "long", day: "numeric"}
    )
}

export default IndividualBlogDetails

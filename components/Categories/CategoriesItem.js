import Link from "next/link";
function CategoriesItem() {
    const Categories = ['Perl', 'Python', 'Data Analysis', 'Mojolicious', 'NextJs']
    return (
        <div className="h-full-screen shadow-lg rounded">
            <ul className="ml-4 mb-4 max-w-full mr-4">
                <li>/#> ls</li>
                {
                    Categories.map(event =>
                        <div key={event}>
                            <li className="mt-2 mb-2 mr-4 py-4 px-4" id={event} >
                                - <a className="hover:underline hover:text-cyan-600" href="#"> {event} </a>
                            </li>
                            <hr />
                        </div>
                    )
                }
            </ul>
        </div>
    )
}
export default CategoriesItem
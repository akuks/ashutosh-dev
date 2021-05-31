import Link  from "next/link";
import IndividualBlogDetails from "./IndividualBlogDetails";

function BlogList(props) {
    const Blogs  = props.Blogs.sample_blogs

    return (
        <div className="ml-4">
            {
                Blogs.map( event =>
                    <IndividualBlogDetails details={event} />
                )
            }
        </div>
    )
}

export default BlogList

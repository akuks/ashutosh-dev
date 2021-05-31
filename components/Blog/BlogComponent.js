import BlogList from "./BlogList";

function BlogComponent(props) {
    // console.log(props)
    return (
        <div className="ml-4 mt-4 w-1/2 container mr-4">
            <BlogList Blogs={props.Blogs} />
        </div>
    )
}

export default BlogComponent

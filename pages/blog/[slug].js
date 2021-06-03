import BlogDetailsComponent from "../../components/Blog/BlogDetailsComponent";
import {getBlogData} from "../../Utilities/FileRead";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import BlogComponent from "../../components/Blog/BlogComponent";

function IndividualBlogPage(props) {

    return (
        <div className="flex flex-auto">
            <CategoriesComponent />
            <BlogDetailsComponent blog={props}/>
            <div></div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const fileName = '/data/articles.json';
    const { params } = context

    const blogData = getBlogData(fileName, params.slug)

    return {
        props:{
            title: blogData.title,
            date: blogData.published_at,
            body: blogData.body_markdown,
            description: blogData.description,
            categories: blogData.cached_tag_list,
            slug: params.slug
        }
    }
}

export default IndividualBlogPage

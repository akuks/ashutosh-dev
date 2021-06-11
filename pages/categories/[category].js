import {getCategoryBlogsData} from "../../Utilities/FileRead";
import CategoriesComponent from "../../components/Categories/CategoriesComponent";
import BlogComponent from "../../components/Blog/BlogComponent";
import CategoriesList from "../../components/Categories/CategoriesList";

function Category(props) {

    return (
        <div className="flex flex-auto">
            <CategoriesComponent />
            <BlogComponent Blogs={props} />
            <div></div>
        </div>
    )
}

export async function getStaticProps(context) {
    const { category } = context.params

    const data = getCategoryBlogsData('/data/articles.json', category)

    return  {
        props: {
            sample_blogs: data,
            category: category
        }
    }
}

export async function getStaticPaths() {
    const categoriesList = CategoriesList
    return {
        paths: [
            {  params: { category: 'perl' } },
            {  params: { category: 'nextjs' } },
            {  params: { category: 'python' } },
            {  params: { category: 'dataanalysis' } },
            {  params: { category: 'mojolicious' } },
        ],
        fallback: true
    }
}

export default Category
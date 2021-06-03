import ReactMarkdown from 'react-markdown';
import styles from './BlogStyles'

function BlogDetailsComponent(props) {
    // console.log(props.blog.title)
    return (
        <div className={`ml-10 mt-4 w-3/5 container mr-4 shadow rounded border blogs `}>
            <ReactMarkdown >{props.blog.body}</ReactMarkdown>
            <style jsx global>
                {styles}
            </style>
        </div>
    )
} 

export default BlogDetailsComponent

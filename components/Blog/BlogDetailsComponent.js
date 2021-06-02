import ReactMarkdown from 'react-markdown';

function BlogDetailsComponent() {
    const title  = '# Title of the post';
    return (
        <div>
            <ReactMarkdown >{title}</ReactMarkdown>
        </div>
    )
} 

export default BlogDetailsComponent

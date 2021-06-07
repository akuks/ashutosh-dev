import ReactMarkdown from 'react-markdown';
import styles from './BlogStyles'

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function BlogDetailsComponent(props) {
    let body = props.blog.body
    let res = body.match(/<img.* \/>/g);

    for (let r in res) {
        let imageInfo = res[r].split("\"")
        let temp = body.replace(res[r], '![Image ' + r + '](' + imageInfo[1] + ')' )
        body = temp
    }

    const customComponents = {

        code(code) {
            const { className, children } =  code

            let language = new Array();

            if (className) {
                language = className.split("-");
            }

            return (
                <SyntaxHighlighter language={language[language.length -1]} children={children} style={atomDark}   />
            )
        },
    }

    return (
        <div className={`ml-10 mt-4 w-3/5 container mr-4 shadow rounded border blogs `}>
            <ReactMarkdown components={customComponents}>{body}</ReactMarkdown>
            <style jsx global>
                {styles}
            </style>
        </div>
    )
} 

export default BlogDetailsComponent
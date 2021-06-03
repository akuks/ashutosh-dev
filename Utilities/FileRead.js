import fs from 'fs'
import path from "path";

// Get All Blogs Details
export default function getAllBlogsData(fileName) {
    let blog = new Array()
    const data = getFileData(fileName)
    
    for (let index in data) {
        const catList = data[index].cached_tag_list
      
        blog.push({
            title: data[index].title,
            date: data[index].published_at,
            body: data[index].body_markdown,
            description: data[index].description,
            categories: catList,
            slug: data[index].slug
        });
    }

    // Reverse an Array
    const reverseData = blog.slice(0).reverse()

    return reverseData
}

// Get Individual Blog Data from slug
export function getBlogData(fileName, slug) {
    const data = getFileData(fileName)

    for (let index in data) {
        if (data[index].slug === slug) {
            return data[index]
        }
    }
    return 0
}

function getFileData(fileName) {
    const fileToRead = path.join(process.cwd(), fileName)
    return ( JSON.parse(fs.readFileSync(fileToRead)) )
}
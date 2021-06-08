import fs from 'fs'
import path from "path";

// Get All Blogs Details
export default function getAllBlogsData(fileName) {
    let blog = []

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
    return blog.slice(0).reverse()
}

export function getCategoryBlogsData(fileName, category) {

    let blog = []

    const data = getFileData(fileName)

    for (let index in data) {
        const catList = data[index].cached_tag_list

        if (catList.toLowerCase().indexOf(category) != -1) {
            blog.push({
                title: data[index].title,
                date: data[index].published_at,
                body: data[index].body_markdown,
                description: data[index].description,
                categories: catList,
                slug: data[index].slug
            });
        }
    }

    return blog.slice(0).reverse()
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
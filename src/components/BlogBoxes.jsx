import React from "react";
import BlogBoxInfo from "./BlogBoxInfo";
import BlogBox from "./BlogBox";

function CreateBlogBox(blog) {
    return <BlogBox
        title={blog.title}
        description={blog.description}
        author={blog.author}
        img={blog.imgURL}
        articleLink={blog.articleLink}
    />;

}

function BlogBoxes() {
    return <div>
        {BlogBoxInfo.map(CreateBlogBox)}
    </div>
}



export default BlogBoxes;
function BlogBox(props){
    return <div className="blogbox">
        <a href={props.articleLink}><img src={props.img}/></a>
        <h1> 
            {props.title}
        </h1>
        <p>{props.description}</p>
    </div>
}
export default BlogBox;


const Bloglist = ({blogs,title,deleteArticle}) => {
    
    return (
        <div className="article-list">
            <h1> { title} </h1>
             {blogs.map((article)=> (
                <div className="article-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p> Writen by {article.author}</p>
                    <button onClick={() => deleteArticle(article.id)}> Delete Article</button>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;
import React from 'react' 
import News from './News.js'

function NewsContainer ({news}) {
   
    // const eachArticle = news.map(function(article){
    //     return <News key={article.NewsId} article={article}/>
    // })
    console.log(news)

    return (
        news.map(function(article){
           return <News key={article.NewsID} article={article} />
        })
        // {eachArticle}
        // null
    )
}

export default NewsContainer 
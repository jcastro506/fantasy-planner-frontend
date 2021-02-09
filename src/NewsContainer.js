import React from 'react' 
import News from './News.js'

function NewsContainer ({news, loggedIn}) {
   
    // const eachArticle = news.map(function(article){
    //     return <News key={article.NewsId} article={article}/>
    // })
    

     return (
            news.map(function(article){
            return <News key={article.NewsID} article={article} />
         })
    )
    
}

export default NewsContainer 
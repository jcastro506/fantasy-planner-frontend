import React from 'react' 
import News from './News.js'

function NewsContainer ({news}) {
   
     return (
         <div>
            <h2 class="h2">League News</h2>
            {news.map(function(article){
            return <News key={article.NewsID} article={article} />
         })}
         </div>
    )
    
}

export default NewsContainer 
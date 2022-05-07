function getArticleGenerator(articles) {
    let array = articles;


    return () => {
        while (array.length > 0) {
            let container = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = array.shift();
            article.innerText = currentText;
            container.appendChild(article);
            break;

        }
    }
}


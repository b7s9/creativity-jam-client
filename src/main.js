console.log('hello world')

var articles = document.getElementsByTagName('article')
for (var i = 0; i < articles.length; i++) {
	articles[i].parentNode.insertBefore(document.createElement('hr'), articles[i].nextSibling)
}

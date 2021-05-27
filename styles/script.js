function create() {
    var img = document.createElement('img')
    img.setAttribute('src' , "https://media1.tenor.com/images/9a94ccad1586c72f01020b24c2dae034/tenor.gif?itemid=21659407")
    document.getElementById('fleximgs').appendChild(img) 
}

function remove(){
    
    document.getElementById('fleximgs').remove()   
    var h3 = document.createElement('h3')
    var text = document.createTextNode("Refresh your page!")
    h3.setAttribute('id' , 'warningtext')
    h3.appendChild(text)
    document.getElementById("warning").appendChild(h3)

}

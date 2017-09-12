console.log('Loaded!');
//change the text of the main text
var element=document.getElementById('main-text');
element.innerHTML='Hi,i have made some changes here...';
//move the image
var img= document.getElementById('me');
img.onclick = function()
{
 img.style.margin ='100px';   
};
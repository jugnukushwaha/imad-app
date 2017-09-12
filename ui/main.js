console.log('Loaded!');
//change the text of the main text
var element=document.getElementById('main-text');
element.innerHTML='Hi,i have made some changes here...';
//move the image
var img= document.getElementById('me');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginleft=marginleft + 'px';
    
}
img.onclick = function()
{
var interval=setinterval(moveright,100); 
};
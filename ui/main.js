console.log('Loaded!');
//change the text of the main text
//var element=document.getElementById('main-text');
//element.innerHTML='Hi,i have made some changes here...';
//move the image
var img= document.getElementById('main-file');
var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function()
{
var interval = setInterval(moveRight,30); 
};
var button=document.getElementById('counter');
var counter =0;
button.onclick=function()
{
    counter +=1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
}

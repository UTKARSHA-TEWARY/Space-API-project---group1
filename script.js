const apikey="bqcuHY9yvNgIxvjRYcoOIEFsWOwOxe0fkBJxgh4e";
const url="https://api.nasa.gov/planetary/apod?";
let container=document.querySelector('.container');

let button=document.querySelector('#fetch');
button.addEventListener('click',()=>{
    let imgcon=document.querySelector('.image');
    imgcon.remove();

    let newimgcon=document.createElement('div');
    newimgcon.classList.add('image');
    container.append(newimgcon);
    let dateinp=document.querySelector('.tog input');
    let date=dateinp.value;

    let request=new XMLHttpRequest();
    request.open('GET', url+"date="+date+"&api_key="+ apikey);
request.send();
request.onload= function(){
    if(request.status===200){
let data=JSON.parse(request.responseText);
let img=data.hdurl;
let image=document.createElement('img');
image.src=img;


newimgcon.append(image);
    }else{
        window.alert("please enter date in correct format");
    }
}
})

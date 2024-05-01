let boxes = document.querySelectorAll(".boxes");
let i=0;
let imgbox = document.querySelector(".imgbox");
let eightimagearray;
document.querySelector(".btnr").addEventListener("click",()=>
{
    i;
    i = (i+1) % boxes.length;
    boxes.forEach((box)=>
    {
        box.classList.remove("active");
    })
    boxes[i].classList.add("active");
    imgbox.innerHTML="";
    imgbox.appendChild(eightimagearray[i]);
    console.log(imgbox);
})
document.querySelector(".btnl").addEventListener("click",()=>
{
    i;
    i = (i-1+boxes.length) % boxes.length;
    boxes.forEach((box)=>
    {
        box.classList.remove("active");
    })
    boxes[i].classList.add("active");
    imgbox.innerHTML="";
    imgbox.appendChild(eightimagearray[i]);
})
let keyword = "lion";
let accesskey = "9cGc4kkOrpOG5W_97ZAHgUicLvnKJZ2KAADYuWi2nyQ";
let page = 1;
let image=document.querySelector(".image"); 
async  function imagesearch()
{
    console.log(keyword);
    let url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=8`;
    let response = await fetch(url,{method:'GET'});
    let data = await response.json();
    console.log(data);
    console.log();
    imagearray=data.results;
    console.log(imagearray);
    console.log();
    eightimagearray=imagearray.map((singleimaeg)=>
    {
        let img = document.createElement("img");
        img.src=singleimaeg.urls.small;
        img.className="image";
        return img;        
    })
    console.log(eightimagearray);
    console.log();
    console.log(eightimagearray[0]);
}
imagesearch();

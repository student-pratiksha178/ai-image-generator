const accesskey ="wGLFZ1tP8kcxa6x_h_pg9bUXEaJ5fJSRQa8LI0lAM_k";

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");


let keyword="4wVlpVgHtI8prtexmhAw6mAtMrAtUH1pw4m_iRsnb-A";
let page=1;

async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12` ;

    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;

    if(page===1){
        searchResult.innerHTML="";
    }

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
    
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
    
    }) 
    showMoreBtn.addEventListener("click",()=>{
        page++;
        searchImage();
    })

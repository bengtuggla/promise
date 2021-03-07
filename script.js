const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container')
const url = "https://source.unsplash.com/random";

//Här kommer visas random bild från unsplash. Logiken sker via PROMISE som sköts av en extern funktion
btn.addEventListener('click', ()=>{
  loadImage(url).then((data)=>
   {container.appendChild(data)}).catch(err=>{console.log(err)});

})

//Här är promise funktionen
function loadImage(url){
return new Promise((resolve, reject)=> {
   let img = new Image();
   img.addEventListener('load',()=> {
    resolve(img)
   })
   img.addEventListener('error',()=> {
    reject(new Error(`Failade att ladda bilden från ${url}`))
   })
   img.src = url;

 })

}


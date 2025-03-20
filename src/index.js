/*const init = () => {
   const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit",(event)=> {
        event.preventDefault();
       console.log(event.target.children[1].value);
       const input = document.querySelector("input#searchByID");
       

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response)=> response.json())
       .then((data)=> {
            console.log(data);
        });
    });
  
};

// document.addEventListener('DOMContentLoaded',init);
document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('form').addEventListener('submit',(event)=>{
        console.log(event.target.children[1].value);
        event.preventDefault();
    });
});

//input.addEventListener("submit",(event)=>{
  //  console.log(event);
//})*/

const init = ()=>{
    const inputForm = document.querySelector("form")
    inputForm.addEventListener("submit",(event)=>{
       console.log(event.target.children[1].value);
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) =>response.json())
        .then ((data)=>{
            const title =document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    })
}
document.addEventListener('DOMContentLoaded',init);

  
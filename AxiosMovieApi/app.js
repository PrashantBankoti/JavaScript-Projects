const form = document.querySelector('#movieForm');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    deleteImages();
    const userInput = form.elements.query.value;
    const config = {params:{ q:userInput }}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    searchImage(res.data);
    form.elements.query.value='';
});

const searchImage =(shows)=>{
    for(let movie of shows){
        if(movie.show.image){
        const img = document.createElement('IMG');
        img.src=movie.show.image.medium;
        document.body.append(img);
        // const span = document.createElement('SPAN');
        // span.innerHTML = movie.show.name;
        // document.body.append(span)
        }
    }
}

const deleteImages = function(){
    const imgs = document.querySelectorAll('img');
    for(let img of imgs){
        img.remove();
    }
}
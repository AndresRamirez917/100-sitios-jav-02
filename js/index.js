const features = document.querySelector('.features-row');
const signup = document.querySelector('#signup')

async function getData(){
    const results = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const photos = await results.json();
    photos.forEach(element => {
        if(element.id <= 2){
        const feature = document.createRange().createContextualFragment(`
            <div class="features-image-1">
                    <img src="${element.url}" alt="">
                </div>
            `)
            features.append(feature)
       }
    });
}

getData()
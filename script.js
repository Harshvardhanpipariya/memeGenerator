document.addEventListener('DOMContentLoaded', () => {
    const generateMemeBtn = document.getElementById('generateMemeBtn');
    const memeContainer = document.getElementById('memeContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');

    generateMemeBtn.addEventListener('click', memeApi);

    function memeApi()
   {

    loadingSpinner.classList.remove('hidden');
    console.log(loadingSpinner.className)
    memeContainer.innerHTML = '';

    const url = 'https://meme-api.com/gimme/15';

    fetch(url)
        .then(data => data.json() )
        .then(data => {
            const memes = data;
            const randomIndex = Math.floor(Math.random() * memes.count);
            const meme = memes.memes[randomIndex];
            


            loadingSpinner.classList.add('hidden');
            memeContainer.innerHTML = `
                <img src="${meme.url}" alt="${meme.author}">
            `;
        })
        .catch(error => {
            console.error('Error fetching meme:', error);
            loadingSpinner.classList.add('hidden');
            memeContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
        });


   } 
});

document.addEventListener('DOMContentLoaded', () => {

    const showPopUp = (imgSrc) => {
        const popImg = document.querySelector('.pop-img');
        popImg.style.display = 'block';
        popImg.querySelector('img').src = imgSrc;
    };

    const hidePopUp = () => {
        document.querySelector('.pop-img').style.display = 'none';
    };

    
    document.querySelectorAll('section img').forEach(img => {
        img.onclick = () => {
            showPopUp(img.getAttribute('src'));
        };
    });

  
    document.querySelector('.pop-img span').onclick = hidePopUp;

  
    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            const popImg = document.querySelector('.pop-img');
            if (popImg.style.display === 'block') {
                hidePopUp();
            }
        }
    });

  

});


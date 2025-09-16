document.addEventListener('DOMContentLoaded', () => {
    const dvd = document.getElementById('dvd');
    const block = document.getElementById('block');

    let posX = 0;
    let posY = 0;

    let velX = 2;
    let velY = 2;

    function animacao(){
        const logoWidth = dvd.clientWidth;
        const logoHeight = dvd.clientHeight;
        const blockWidth = block.clientWidth;
        const blockHeight = block.clientHeight;

        posX += velX;
        posY += velY;

        if(posX + logoWidth >= blockWidth || posX <= 0){
            velX *= -1;
        }
        if(posY + logoHeight >= blockHeight || posY <= 0){
            velY *= -1;
        }
        dvd.style.left = `${posX}px`;
        dvd.style.top = `${posY}px`;
        requestAnimationFrame(animacao);
    }
    animacao();
});
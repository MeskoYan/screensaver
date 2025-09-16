document.addEventListener('DOMContentLoaded', () => {
    const dvd = document.getElementById('dvd');
    const body = document.body

    let posX = 0;
    let posY = 0;

    let velX = 2;
    let velY = 2;

    function animacao(){
        const dvdWidth = dvd.clientWidth;
        const dvdHeight = dvd.clientHeight;
        const width = body.clientWidth;
        const height = body.clientHeight;

        posX += velX;
        posY += velY;

        if(posX + dvdWidth >= width || posX <= 0){
            velX *= -1;
        }
        if(posY + dvdHeight >= height || posY <= 0){
            velY *= -1;
        }
        dvd.style.left = `${posX}px`;
        dvd.style.top = `${posY}px`;
        requestAnimationFrame(animacao);
    }
    animacao();
});
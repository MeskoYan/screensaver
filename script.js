document.addEventListener('DOMContentLoaded', () => {
    const dvd = document.getElementById('dvd');
    const bg = document.getElementById('bg');

    let posX = Math.floor(Math.random() * (bg.clientWidth - dvd.clientWidth));
    let posY = Math.floor(Math.random() * (bg.clientHeight - dvd.clientHeight));

    let velX = 2;
    let velY = 2;

    function clicou(){
        posX = Math.floor(Math.random() * (bg.clientWidth - dvd.clientWidth));
        posY = Math.floor(Math.random() * (bg.clientHeight - dvd.clientHeight));
        dvd.style.left = `${posX}px`;
        dvd.style.top = `${posY}px`;

        velX = Math.floor(Math.random() *7)
        while(velX < 2){
            velX=Math.floor(Math.random() * 7)
        }
        velY=velX
        }

    dvd.addEventListener('click',clicou);

    window.addEventListener('resize', () => {
        const newHeight = bg.clientHeight;
        const newWidth = bg.clientWidth;

        if (posX + dvd.clientWidth > newWidth){
            posX = newWidth-dvd.clientWidth;
        }
        if (posY + dvd.clientHeight > newHeight){
            posY = newHeight-dvd.clientHeight;
        }
        if(posX<0){
            posX=0;
        }
        if(posY<0){
            posY=0;
        }

    })

    function animacao(){
        const dvdWidth = dvd.clientWidth;
        const dvdHeight = dvd.clientHeight;
        const width = bg.clientWidth;
        const height = bg.clientHeight;

        posX += velX;
        posY += velY;

        if(posX + dvdWidth >= width || posX <= 0 || posX >=1920){
            velX *= -1;
        }
        if(posY + dvdHeight >= height || posY <= 0 || posY >=1080){
            velY *= -1;
        }
        dvd.style.left = `${posX}px`;
        dvd.style.top = `${posY}px`;
        requestAnimationFrame(animacao);
    }
    animacao();
});
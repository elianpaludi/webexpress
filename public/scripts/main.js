let cursor = document.getElementById('cursor'); //Cursor


document.addEventListener('mousemove', function(e) {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    console.log(e.pageX, e.pageY);
});


var typed = new Typed('#typed',{
    strings:["proyecto","sueño","idea", "pagina web"],
    backSpeed: 70,
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,

    });
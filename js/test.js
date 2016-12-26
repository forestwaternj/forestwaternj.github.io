function randomHero() {
    var heroPics = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
     ];

    $('header').css({
        'background' : 'url('+ heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
        'background-attachment' : 'scroll',
        'background-position' : '50% 50%',
        'background-size' : 'cover'
    });
}

// Show Random Image on Page Load
randomHero();

// Simulate a page refresh
$('button').on('click', randomHero);

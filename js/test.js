function randomHero() {
    var heroPics = [
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
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

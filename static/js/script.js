var openPhotoSwipe = function () {
    var pswpElement  = document.querySelectorAll('.pswp')[0];


    var items = [
        {
            src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
            w: 1440,
            h: 1024
        },
        {
            src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
            w: 1440,
            h: 1024
        },
        {
            src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp',
            w: 1440,
            h: 1024
        },
        {
            src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
            w: 1440,
            h: 1024
        },
        {
            src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
            w: 1440,
            h: 1024
        },
        {
            src: '/images/image1.jpg',
            w: 1440,
            h: 1024
        },
        {
            src: '/images/image2.jpg',
            w: 1440,
            h: 1024
        },
        {
            src: '/images/image3.jpg',
            w: 1440,
            h: 1024
        },
    ];

    var options = {
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
    };


    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

};


const openGallery = document.getElementById('openGallery');
const smallGallery = document.getElementById('smallGallery');


openGallery.onclick = openPhotoSwipe;
smallGallery.onclick = openPhotoSwipe;
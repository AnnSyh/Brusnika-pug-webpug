import PhotoSwipeLightbox from '/js/plugins/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('/js/plugins/photoswipe.esm.js'),
});

lightbox.init();
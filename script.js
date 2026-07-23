console.log("Animasi berjalan");
console.log("Script berhasil dimuat");


// TRUCK
gsap.to(".truck", {
    x: 20,

    duration: 1,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"
});


// KOIN
gsap.to(".coin", {
    y: -15,

    duration: 1,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"
});


// KALENDER
gsap.to(".calendar", {
    rotation: 8,

    duration: 1,

    repeat: -1,

    yoyo: true,

    transformOrigin: "top center",

    ease: "power1.inOut"
});


// PESAWAT
gsap.to(".plane", {
    x: 20,

    y: -10,

    duration: 2,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"
});


// ICON LOKASI
gsap.to(".loc", {
    y: -8,

    duration: 1,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"
});


// CEKLIS
gsap.to(".ceklis", {
    opacity: 0,

    duration: 0.9,

    repeat: -1,

    yoyo: true
});


// PAKET
gsap.to(".paket", {
    y: -8,

    duration: 1.2,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"
});


// BULAN
gsap.to(".luc", {
    y: -8,

    duration: 1.2,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"
});


// KAPAL
gsap.to(".ship", {
    rotation: -2,

    duration: 1,

    repeat: -1,

    yoyo: true,

    transformOrigin: "top center",

    ease: "power1.inOut"
});


// AIR
gsap.to(".air", {
    x: 2,

    y: 0.8,

    duration: 0.7,

    repeat: -1,

    yoyo: true
});


// TULISAN
gsap.to(".tulisan", {
    x: 5,

    duration: 1.5,

    repeat: -1,

    yoyo: true
});

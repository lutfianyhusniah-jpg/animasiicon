// Semua animasi sudah menggunakan CSS.
// File ini disiapkan jika nanti ingin
// menambahkan interaksi.
console.log("Animasi berjalan");
console.log("Script berhasil dimuat");
console.log(gsap);

gsap.to(".truck", {
    x: 20,
    duration: 1,
    
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.to(".coin", {
    y: -15,
    duration: 1,
    repeat: -1,
    yoyo: true,
});

gsap.to(".calendar", {
    rotation: 8,
    duration: 1,
    repeat: -1,
    yoyo: true,
    transformOrigin: "top center",
    ease: "power1.inOut"
});

gsap.to(".plane", {
    x: 20,
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true
});

gsap.to(".loc", {
    y: -8,
    duration: 1,
    repeat: -1,
    yoyo: true
});

gsap.to(".ceklis", {
    opacity: 0,
    duration: 0.9,
    repeat: -1,
    yoyo: true
});

gsap.to(".paket", {
    y: -8,
    duration: 1.2,
    repeat: -1,
    yoyo: true
});

gsap.to(".luc", {
    y: -8,
    duration: 1.2,
    repeat: -1,
    yoyo: true
});

gsap.to(".ship", {
    rotation: -2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    transformOrigin: "top center",
    ease: "power1.inOut"
});

gsap.to(".air", {
    x: 2,
    y: 0.8,
    duration: 0.7,
    repeat: -1,
    yoyo: true
});

gsap.to(".tulisan", {
    x: 5,
    duration: 1.5,
    repeat: -1,
    yoyo: true
});

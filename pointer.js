// 

// This folder maked for handel the pointer effects

// 


let pointer1 = document.querySelector('.pointer1')
let pointer2 = document.querySelector('.pointer2')
document.addEventListener('mousemove', (e) => {
    gsap.to(pointer1, {
        x: e.clientX + 'px',
        y: e.clientY + 'px',
        duration: 0.7
    });

    gsap.to(pointer2, {
        x: e.clientX + 10 + 'px', // Offset for demonstration
        y: e.clientY + 10 + 'px', // Offset for demonstration
        duration: 0.5 // Different duration for demonstration
    });
});

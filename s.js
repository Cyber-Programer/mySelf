// ----------------
// This is Me
// cyber-programer
// root_lovs
// ----------------
const images = document.querySelectorAll('#pic');
gsap.registerPlugin(ScrollTrigger);

gsap.from('.right h3', {
    x: 100, 
    duration:2,
    scrollTrigger: {
      trigger: 'body',
      start: 'center 90%',
      end: 'center 50%',
      scrub: true,
    //   markers:true
    }
  });

gsap.from('.right h1',{
    opacity:0,
    duration:1.5,
    scrollTrigger: {
        trigger: 'body',
        start: 'center 70%',
        end: 'center 50%',
        scrub: true,
        // markers:true
    }
})

gsap.from('.right p',{
    color:'#bdc3c7',
    duration:1,
    scrollTrigger: {
        trigger: 'body',
        start : 'center 60%',
        end : 'center 50%',
        scrub : true,
        // markers: true
    }
})

gsap.from('.section1',{
    y:-1000
})

  gsap.to(images, {
    y: 15, // Adjust the distance of movement
    duration: 1, // Adjust the duration of each movement
    ease: "power1.inOut", // Adjust the easing function
    yoyo: true, // Reverses the animation after it finishes
    repeat: -1 // Repeats the animation infinitely
});

images.forEach(image => {
    image.addEventListener('mousemove', (event) => {
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = x - centerX;
        const deltaY = y - centerY;

        gsap.to(image, {
            x: deltaX * 0.1, // Adjust sensitivity
            y: deltaY * 0.1, // Adjust sensitivity
            rotationY: deltaX * 0.05, // Adjust rotation sensitivity
            rotationX: -deltaY * 0.05, // Adjust rotation sensitivity
            duration: 0.5,
            ease: "power2.out"
        });
    });

    image.addEventListener('mouseleave', () => {
        gsap.to(image, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});




document.addEventListener('DOMContentLoaded',()=>{

    
    gsap.from(".half1 > h3",
        {   
            x:300,
            duration:1,
            
            // delay:0.1
        }
    )

    gsap.from(".half1 > h1",{
        x:-1000,
        delay:0.5,
        duration:0.6
    })

    gsap.from(".half1 > p",{
        x:-1000,
        delay:0.8,
        duration:0.8
    })




})


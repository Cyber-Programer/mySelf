// ----------------
// This is Me
// cyber-programer
// root_lovs
// ----------------
const images = document.querySelectorAll('#pic');
gsap.registerPlugin(ScrollTrigger);


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

// Capture the initial x position of the element
const h3 = document.querySelector('.right h3');
const initialX = h3.getBoundingClientRect().left;
const imgageFW = document.querySelector('#wind');
const rightPartos = document.querySelector('.section4 .right');
const section4Img = document.querySelector('.section4 .right .img');
const section4Data = document.querySelector('.section4 .right .data');

  function ck() {
    // Ensure the image is fully loaded before checking its width
    if (imgageFW.complete) {
      if (imgageFW.width < 150) {
        rightPartos.classList.add('left');
        rightPartos.classList.remove('right');

        // Move the image before the data
        rightPartos.insertBefore(section4Img, section4Data);
      }
    } else {
        // Add an onload event to ensure the image is loaded before checking its width
        imgageFW.onload = () => {
          if (imgageFW.width < 150) {
            rightPartos.classList.add('left');
            rightPartos.classList.remove('right');
  
            // Move the image before the data
            rightPartos.insertBefore(section4Img, section4Data);
          }
        };
      }
  }

  ck();

function ckposition() {
    const h3 = document.querySelector('.right h3');
    const currentX = h3.getBoundingClientRect().left;

    if (currentX != initialX) {
        location.reload(); // Reload the page if the position hasn't changed
    }
}

document.addEventListener('DOMContentLoaded',()=>{

    gsap.to(images, {
        y: 15, // Adjust the distance of movement
        duration: 1, // Adjust the duration of each movement
        ease: "power1.inOut", // Adjust the easing function
        yoyo: true, // Reverses the animation after it finishes
        repeat: -1 // Repeats the animation infinitely
    });
    

    gsap.from(".half1 > h3",
        {   
            x:300,
            duration:1,
            
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

    // Scrool triger starting

    gsap.from('.right h3', {
        x: 100, 
        duration:2,
        scrollTrigger: {
          trigger: '.right h3',
          start: 'center 90%',
          end: 'center 50%',
          scrub: true,
          onLeave : () => ckposition()
        //   markers:true
        }
      });
    
    gsap.from('.right h1',{
        opacity:0,
        duration:1.5,
        scrollTrigger: {
            trigger: '.right h1',
            start: 'center 700px',
            end : 'center 50px',
            scrub: true,
            // markers:true
        }
    })
    
    gsap.from('.right p',{
        color:'#bdc3c7',
        duration:1,
        scrollTrigger: {
            trigger: '.right p',
            start : 'center 60%',
            end : 'center 50%',
            scrub : true,
            // markers: true
        }
    
    })

    
    gsap.from('.section3 h3',{
        x:500,
        duration:0.7,
        scrollTrigger:{
            trigger: '.section3 h3',
            start : 'center 60%',
            end: 'center 30%',
            scrub : true,
            // markers: true
        }
    })

    gsap.from('.section3 h1',{
        opacity: 0,
        x:-300,
        duration: 1,

        scrollTrigger: {
            trigger:'.section3 h1',
            start : 'center 80%',
            end: 'center 20%',
            scrub: true,
            // markers:true
        }
    })

    



})



document.addEventListener("DOMContentLoaded", () => {
  mainIntroTimeline();
  mainProfileTimeline();

  const mockupSlide = new Swiper(".mockup", {
    effect: "cube", // 큐브 효과 사용
    speed: 1500,
    cubeEffect: {
      slideShadows: false, // 슬라이더를 돌릴때 흐릿해 지는 그림자 표시 여부
      shadow: true, // 슬라이더 밑의 그림자 표시 여부
      shadowOffset: 150, // 그림자 위치, 수치가 클수록 아래로 내려감
      shadowScale: 0.94, // 그림자 크기, 수치가 클수록 그림자 커짐
    },
  });

  function mainIntroTimeline() {
    // const speed = 1;
    // const scrllo = document.querySelector(".mainIntro").offsetWidth * speed;
    // document.querySelector(".mainIntro").style.height = `calc(${scrllo})`;
    const tl = gsap.timeline({
      delay: 3,
      scrollTrigger: {
        trigger: ".mainIntro",
        pin: true,
        anticipatePin: true,
        scrub: 1,
        start: "top top",
        end: "+=4000",
        // markers: true,
      },
    });

    tl.from(".mainIntro .itm .tit:nth-of-type(1) h2", {
      x: 300,
      autoAlpha: 0,
      duration: 2,
    })
      .from(".mainIntro .itm .tit:nth-of-type(1) p", {
        x: 300,
        duration: 2,
        autoAlpha: 0,
      })
      .from(".mainIntro .st01", {
        y: -300,
        autoAlpha: 0,
        duration: 3,
        rotation: 360,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) h2", {
        x: 300,
        autoAlpha: 0,
        duration: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) p", {
        x: 300,
        autoAlpha: 0,
        duration: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2", {
        x: 300,
        autoAlpha: 0,
        duration: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2 span", {
        y: 300,
        rotation: 360,
        duration: 2,
        scrub: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) p", {
        x: 3000,
        autoAlpha: 0,
        duration: 2,
      })
      .to(".mainIntro", {
        rotation: 130,
        duration: 10,
        ease: "none",
      })
      .set({}, {}, "+=5");
  }

  function mainProfileTimeline() {
    const mu = document.querySelectorAll(".txtItm");
    const tl = gsap.timeline({});

    mu.forEach((itm, idx) => {
      tl.from(itm, {
        //x: 5,
        // autoAlpha: 1,
        scrollTrigger: {
          trigger: itm,
          pin: true,
          scrub: 1,
          start: "200px center",
          end: "+=600 center",
          // markers: true,
          toggleClass: { targets: itm, className: "on" },
          //onComplete: () => console.log(idx),
        },
        onUpdate: () => mockupSlide.slideToLoop(idx),
      });
    });

    gsap.from(".circle", {
      x: 300,
      scale: 0,
      scrollTrigger: {
        trigger: ".mainProfile",
        //pin: true,
        scrub: 1,
        //onComplete: () => console.log(idx),
      },
    });

    // gsap.fromTo(
    //   ".circle",
    //   {
    //     width: "0",
    //     height: "0",
    //     duration: "1",
    //     ease: "elastic",
    //     top: "50%",
    //     left: "50%",
    //   },
    //   {
    //     width: "2500px",
    //     height: "2500px",
    //     duration: "10",
    //     top: "-50%",
    //     left: "50%",
    //   }
    // );
  }
});

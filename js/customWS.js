document.addEventListener("DOMContentLoaded", () => {
  mainIntroTimeline();
  mainProfileTimeline();
  TrainingTimeline();
  MainTrainingTimeline();
  TrainingListTimeline();

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

    tl.to(".welcome_txt", {
      autoAlpha: 0,
    })
      .from(".mainIntro .itm .tit:nth-of-type(1) h2", {
        x: 300,
        autoAlpha: 0,
        duration: 10,
      })
      .from(".mainIntro .itm .tit:nth-of-type(1) p", {
        x: 300,
        duration: 10,
        autoAlpha: 0,
      })
      .from(".mainIntro .st01", {
        y: -300,
        autoAlpha: 0,
        duration: 10,
        rotation: 360,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) h2", {
        x: 300,
        autoAlpha: 0,
        duration: 10,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) p", {
        x: 300,
        autoAlpha: 0,
        duration: 10,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2", {
        x: 300,
        autoAlpha: 0,
        duration: 10,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2 span", {
        x: 2000,
        rotation: 360,
        duration: 15,
        scrub: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) p", {
        x: 3000,
        autoAlpha: 0,
        duration: 10,
      })
      .to(".mainIntro", {
        rotation: 130,
        duration: 10,
        delay:2,
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
          end: "+=1600 center",
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
  }

  function TrainingTimeline() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Training",
        pin: true,
        anticipatePin: true,
        scrub: 1,
        start: "top top",
        end: "+=3000",
        markers: true,
      },
    })
    // .to('.Training span',{
    //   autoAlpha: 0,
    //   duration: 10,
    // })

  .from(".Training span:nth-child(1)", {
    y:-1000,
    x:2000,
      duration: 1,
      scrub: 1,
      delay:0 ,
    })

  .from(".Training span:nth-child(2)", {
    y:-500,
    x:-2000,
      duration: 1,
      scrub: 1,
      delay:0,
    })
  .from(".Training span:nth-child(3)", {
      y:-1000,
      x:2000,
      duration: 1,
      scrub: 1,
      delay:0,
    })
  .from(".Training span:nth-child(4)", {
    y:-500,
    x:-2000,
      duration: 1,
      scrub: 1,
      delay:0 ,
    })

  .from(".Training span:nth-child(5)", {
    y:-1000,
    x:2000,
      duration: 1,
      scrub: 1,
      delay:0,
    })
  .from(".Training span:nth-child(6)", {
    y:-500,
    x:-2000,
      duration: 1,
      scrub: 1,
      delay:0,
    })
  }


  function MainTrainingTimeline() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".MainTraining",
        pin: true,
        anticipatePin: true,
        scrub: 1,
        start: "top top",
        end: "+=3000",
        markers: true,
      },
    })
    .fromTo('.MainTraining .won',
    {'width':'0', 'height':'0','duraton':'20', },
    {'width':'2500', 'height':'2500', 'autoAlpha':'1', 'duraton':'20',})

    .fromTo('.MainTraining h2',{autoAlpha:1, duration:10,
      scrub:1,},
      {
      duration:10,
      scrub:1,
      autoAlpha:0,
    },0)
    
  }

  function TrainingListTimeline() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".TrainingList",
        pin: true,
        anticipatePin: true,
        scrub: 1,
        start: "-20% top",
        end: "+=5000",
        markers: true,
      },
    })
    .fromTo('.TrainingList h2',{
      // y:-3000,
      duration:10,
      scrub:1,
      autoAlpha:0,
    },
    {
      autoAlpha:1,
    })
    .fromTo('.TrainingList .won',
    {'width':'2500', 'height':'2500','duraton':'10',},
    {'width':'1', 'height':'1','duraton':'10',})

    .from('.TrainingList .inner .t_box ul li:nth-of-type(even)',{
    x:1000,
    scrub:1,
    duration:20,
    autoAlpha:0,
    rotate:180,
    })
    .from('.TrainingList .inner .t_box ul li:nth-of-type(odd)',{
    x:-1000,
    scrub:1,
    duration:20,
    autoAlpha:0,
    rotate:180,
    })
    .from('.TrainingList .inner .b_box ul li:nth-of-type(even)',{
    x:1000,
    scrub:1,
    duration:20,
    autoAlpha:0,
    rotate:180,
    })
    .from('.TrainingList .inner .b_box ul li:nth-of-type(odd)',{
    x:-1000,
    scrub:1,
    duration:20,
    autoAlpha:0,
    rotate:180,
    })

  }


});

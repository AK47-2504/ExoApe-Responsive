import gsap, { Power4, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const Images = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const  tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        start: "0 0 ",
        scrub: 1,
      }

    })
    tl.to(first.current,{
      x:"25%",
      ease: Power4,
    }, 'a')
    tl.to(second.current,{
      x:"-25%",
      ease: Power4,
    }, 'a')
    tl.to(third.current,{
      x:"-20%",
      ease: Power4,
    }, 'a')
    tl.to(fourth.current,{
      x:"20%",
      ease: Power4,
    }, 'a')
  })

  return (
    <div ref={parent} className="w-full h-[90vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] sm:w-[20%] sm:h-[75%] h-1/2 relative mt-5 ">
        <div ref={first} className="absolute w-20 sm:w-40 h-[7rem] sm:h-[15rem] -right-1/3 top-5">
          <img
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="absolute w-[8rem] sm:w-[15rem] aspect-video -left-1/2 sm:-left-[60%] top-1/4">
          <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div ref={third} className="absolute w-[9rem] sm:w-[13rem] h-[5rem] -left-[60%] bottom-2">
          <img
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={fourth} className="absolute w-[9rem] sm:w-[12rem] aspect-[1.5/1] -right-[60%] sm:-right-[60%] -bottom-[40%] sm:bottom-[-20%]">
          <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/440x752/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;

import { useState } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const [elems] = useState([
    {
      heading: "Amaterasu",
      subheading: "Frontier Health Innovation",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04",
      img: "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)",
    },
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      img: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Cambium",
      subheading: "Pioneering Sustainable Solutions",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
      img: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
    },
    {
      heading: "Studio D",
      subheading: " Urban and Landscape Design",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f",
      img: "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-20 py-20">
        <div className="flex gap-3 items-center">
          <div className="featured gap-3">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h3 className="capitalize">Featured Projects</h3>
        </div>
        <h1 className="text-6xl sm:text-[13rem] sm:tracking-light  my-5 overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{once : true}}
            transition={{
              ease:[0.22, 1,0.36, 1],
              duration: 1.5
            }}
            className="inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>
        <p className="leading-2 text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-5 mt-10">
          {elems.map((item, index) => (
            <div key={index} className="elem w-full sm:w-[48%] mt-10">
              <div className="video w-full sm:h-[50vw] h-[104vw] relative overflow-hidden">
                <motion.img
                initial={{opacity: 1}}
                whileHover={{opacity: 0}}
                data-scroll
                data-scroll-speed="-.5"
                  className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block z-[1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={item.video}
                ></video>
              </div>
              <div>
                <h3 className="font-semibold">{item.heading}</h3>
                <h3 className="capitalize opacity-50">{item.subheading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

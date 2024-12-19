import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="relative w-full h-[150vh] sm:h-[300vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt="Hero image of Exo Ape design studio"
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="text absolute top-0 h-full max-w-screen-2xl mx-auto px-5 sm:px-20 text-white">
          <div className="para mt-72 sm:mt-[35rem]">
            {[
              "Global digital design studio partnering with brands",
              "and businesses that create exceptional experiences",
              "where people live, work and unwind.",
            ].map((item, index) => (
              <p
                key={`line-${index}`}
                className="text-md masker sm:text-2xl overflow-hidden"
              >
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.5,
                    delay: index * 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            ))}
          </div>
          <div className="headings mt-10 sm:mt-10">
            {["Design", "Digital", "Experience"].map((item, index) => (
              <h1
                key={`heading-${index}`}
                className="text-5xl masker tracking-tighter sm:py-3 leading-none sm:text-[15rem] font-lighter overflow-hidden"
              >
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.5,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            ))}
          </div>
          <div className="sm:w-1/3 para-2 mt-10 sm:mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1 mt-10 inline-block"
              href="/studio"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

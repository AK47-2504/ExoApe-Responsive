import { motion } from "framer-motion";

const Spread = () => {
  return (
    <div className="w-full mt-10 py-10">
      <div className="max-w-screen-2xl mx-auto h-40 px-5 sm:px-10">
        <div className="svg flex items-center gap-2 justify-center">
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
          <h1>In the media</h1>
        </div>
        <div className="text mt-5 text-center">
          {["Spread", "the News"].map((item, index) => {
            return (
              <h1 key={index} className="capitalize text-7xl tracking-tighter overflow-hidden">
                <motion.span
                  initial={{ rotate: 90, y: "40%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.5,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            );
          })}
          <p className="mx-auto mt-4 text-[13px] leading-2">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className="border-b-[1px] mt-2 text-[13px] border-zinc-900  mt-8 inline-block"
            href="#"
          >
            Browse all new
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;

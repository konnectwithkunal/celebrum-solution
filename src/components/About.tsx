import React from 'react';
import { motion, useInView } from 'framer-motion';

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div id="about" className="py-16 bg-white relative grid-mob-light md:grid-overlay-light">
      <motion.section
        ref={ref}
        className="max-w-7xl mx-2 md:mx-20 px-2 md:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="section-text w-full mb-8 flex flex-col items-start"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-[5rem] font-normal leading-none text-[#000000] pl-2 mb-2 text-left bg-transparent">
            About us
          </h1>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ rotate: -90, opacity: 0 }}
          animate={isInView ? { rotate: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.div>

        <motion.div
          className="section-description bg-white w-[700px] ml-[450px] mt-[-50px] flex flex-col gap-5 font-normal text-[1.1rem] text-[#222] bg-transparent"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="bg-transparent flex items-start text-2xl text-[#000]">
            <span>
              We are a product-led services company, providing innovative, futuristic, credible and digital solutions specifically designed to meet the unique needs of financial institutions. Led by a team of industry experts, we specialize in delivering bespoke financial solutions and a curated suite of services aimed at empowering institutions and driving their success.
            </span>
          </p>

          <motion.div
            className="mt-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Vision Accordion */}
            <div className="border-b border-gray-300 bg-transparent">
              <button
                onClick={() => setExpanded(expanded === 'vision' ? false : 'vision')}
                className="w-full py-4 flex justify-between items-center text-left bg-transparent hover:opacity-70 transition-opacity"
              >
                <h3 className="text-3xl font-medium text-[#000] bg-transparent">Vision</h3>
                <motion.span
                  animate={{ rotate: expanded === 'vision' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl text-[#000] bg-transparent"
                >
                  ↓
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: expanded === 'vision' ? 'auto' : 0,
                  opacity: expanded === 'vision' ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden bg-transparent"
              >
                <p className="text-2xl text-[#000] leading-relaxed pb-6 bg-transparent">
                  Our vision is to be the most credible partner for financial institutions worldwide, leading through innovation, expertise, and a steadfast commitment to delivering transformative value.
                </p>
              </motion.div>
            </div>

            {/* Mission Accordion */}
            <div className="border-b border-gray-300 bg-transparent">
              <button
                onClick={() => setExpanded(expanded === 'mission' ? false : 'mission')}
                className="w-full py-4 flex justify-between items-center text-left bg-transparent hover:opacity-70 transition-opacity"
              >
                <h3 className="text-3xl font-medium text-[#000] bg-transparent">Mission</h3>
                <motion.span
                  animate={{ rotate: expanded === 'mission' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl text-[#000] bg-transparent"
                >
                  ↓
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: expanded === 'mission' ? 'auto' : 0,
                  opacity: expanded === 'mission' ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden bg-transparent"
              >
                <p className="text-2xl text-[#000] leading-relaxed pb-6 bg-transparent">
                  Our company's mission is to deliver innovative, tailored financial solutions and a curated suite of services that empower financial institutions to achieve exceptional success. This is driven by industry-leading expertise and an unwavering commitment to excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default About;
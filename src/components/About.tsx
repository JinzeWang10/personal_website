import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutIntro, activities, values } from '../data';
import { fadeUp, staggerContainer } from '../lib/animations';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-32 md:py-40 bg-black relative">
      {/* Chapter number watermark */}
      <div className="absolute top-20 left-8 md:left-16 text-8xl font-black text-[#111] select-none pointer-events-none">
        02
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase mb-16"
        >
          002 / About
        </motion.p>

        {/* Two-column: photo + text */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 mb-24"
        >
          {/* Photo */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="overflow-hidden">
              <img
                src={aboutIntro.photo}
                alt="Jinze Wang"
                className="w-full h-auto object-contain grayscale contrast-[1.1] hover:grayscale-0 hover:contrast-100 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-3">
            <motion.p
              variants={fadeUp}
              className="text-base font-light text-[#999] tracking-wide leading-relaxed mb-6"
            >
              {aboutIntro.paragraph1}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base font-light text-[#999] tracking-wide leading-relaxed"
            >
              {aboutIntro.paragraph2}
            </motion.p>
          </div>
        </motion.div>

        {/* Activities — numbered list */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="mb-24"
        >
          {activities.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border-b border-[#222] py-8 first:pt-0"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-[#555] tracking-widest mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title.replace(/^[\u{1F300}-\u{1F9FF}]\s*/u, '')}
                  </h3>
                  <p className="text-sm font-light text-[#999] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values — inline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <p className="text-sm font-light text-[#555] tracking-wide">
            {values.map((v, i) => (
              <span key={i}>
                <span className="text-white/70">{v}</span>
                {i < values.length - 1 && <span className="text-[#333]"> &mdash; </span>}
              </span>
            ))}
          </p>
        </motion.div>
      </div>

      <div className="chapter-line mt-32" />
    </section>
  );
};

export default About;

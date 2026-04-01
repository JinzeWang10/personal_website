import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { technicalSkills, softSkills, skillsQuote } from '../data';
import { fadeUp, staggerContainer } from '../lib/animations';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Word-by-word stagger for quote
  const quoteWords = skillsQuote.text.split(' ');

  return (
    <section id="skills" className="py-32 md:py-40 bg-black relative">
      <div className="absolute top-20 left-8 md:left-16 text-8xl font-black text-[#111] select-none pointer-events-none">
        06
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8" ref={ref}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase mb-16"
        >
          006 / Skills
        </motion.p>

        {/* Technical skills */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="mb-20"
        >
          {technicalSkills.map((cat, ci) => (
            <motion.div key={ci} variants={fadeUp} className="mb-8">
              <p className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase mb-3">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="text-sm font-light text-[#999] hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skills — prose */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="mb-24"
        >
          <p className="text-3xl font-light text-white/50 leading-loose">
            {softSkills.map((s, i) => (
              <span key={i}>
                {s.name}
                {i < softSkills.length - 1 ? '. ' : '.'}
              </span>
            ))}
          </p>
        </motion.div>

        {/* Quote — word-by-word reveal */}
        <div className="max-w-4xl">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light italic text-white/80 leading-tight mb-6">
            {quoteWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.4 + i * 0.03,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-xs font-mono text-[#555] tracking-widest"
          >
            &mdash; {skillsQuote.author}
          </motion.p>
        </div>
      </div>

      <div className="chapter-line mt-32" />
    </section>
  );
};

export default Skills;

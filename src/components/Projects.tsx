import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data';
import { fadeUp, staggerContainer } from '../lib/animations';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => {
    setExpanded(expanded === i ? null : i);
  };

  return (
    <section id="projects" className="py-32 md:py-40 bg-black relative">
      <div className="absolute top-20 left-8 md:left-16 text-8xl font-black text-[#111] select-none pointer-events-none">
        05
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8" ref={ref}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase mb-16"
        >
          005 / Other Projects
        </motion.p>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div
                  data-cursor-hover
                  onClick={() => toggle(i)}
                  className="group border-b border-[#222] py-4 cursor-none select-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className={`text-base font-semibold transition-colors duration-300 ${
                      expanded === i ? 'text-white' : 'text-white/60 group-hover:text-white'
                    }`}>
                      {project.title}
                    </h4>
                    <motion.span
                      className="text-white/40 group-hover:text-white transition-colors text-sm shrink-0"
                      initial={false}
                      animate={{ rotate: expanded === i ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      &rarr;
                    </motion.span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.slice(0, 3).map((tag, ti) => (
                      <span key={ti} className="font-mono text-xs text-[#555]">
                        {tag}{ti < Math.min(project.tags.length, 3) - 1 && ','}
                      </span>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="py-4">
                        <p className="text-sm font-light text-[#999] leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, ti) => (
                            <span
                              key={ti}
                              className="font-mono text-xs text-[#555] border border-[#333] px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5 mt-3"
                          >
                            查看项目
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="chapter-line mt-32" />
    </section>
  );
};

export default Projects;

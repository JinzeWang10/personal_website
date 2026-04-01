import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelinePeriods } from '../data';
import { fadeUp, staggerContainer } from '../lib/animations';

interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  achievements: string[];
  icon?: unknown;
  color?: string;
}

const EntryCard = ({ entry, delay = 0 }: { entry: TimelineEntry; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-8 pb-12 border-l border-[#222]"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.2, type: 'spring' }}
        className="absolute left-0 top-1 w-1.5 h-1.5 bg-[#555] rounded-full -translate-x-[3.5px]"
      />

      <h3 className="text-2xl font-bold text-white mb-1">{entry.title}</h3>
      <p className="text-sm font-light text-[#999] tracking-wide uppercase mb-1">
        {entry.subtitle}
      </p>
      <p className="font-mono text-xs text-[#555] mb-4">
        {entry.period} &middot; {entry.location}
      </p>

      <ul className="space-y-2">
        {entry.achievements.map((a, i) => (
          <li key={i} className="text-sm font-light text-[#999] leading-relaxed">
            <span className="text-[#555] mr-2">&mdash;</span>
            {a}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-32 md:py-40 bg-black relative">
      <div className="absolute top-20 left-8 md:left-16 text-8xl font-black text-[#111] select-none pointer-events-none">
        04
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8" ref={ref}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase mb-16"
        >
          004 / Experience
        </motion.p>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {timelinePeriods.map((period, pi) => {
            const entries: TimelineEntry[] = [];

            if (period.left) entries.push(period.left as TimelineEntry);
            if (period.right) {
              if (Array.isArray(period.right)) {
                entries.push(...(period.right as TimelineEntry[]));
              } else {
                entries.push(period.right as TimelineEntry);
              }
            }

            return (
              <div key={pi} className="mb-16 last:mb-0">
                {/* Period divider */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 mb-8"
                >
                  <span className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase whitespace-nowrap">
                    {period.period}
                  </span>
                  <div className="flex-1 h-px bg-[#222]" />
                </motion.div>

                {/* Entries */}
                {entries.map((entry, ei) => (
                  <EntryCard
                    key={`${pi}-${ei}`}
                    entry={entry}
                    delay={ei * 0.1}
                  />
                ))}
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="chapter-line mt-32" />
    </section>
  );
};

export default Experience;

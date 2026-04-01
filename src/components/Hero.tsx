import { motion, useTransform } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { wipeIn, fadeUp, staggerContainer } from '../lib/animations';

const Hero = () => {
  const { x, y, windowSize } = useMousePosition();

  const rotateX = useTransform(y, [0, windowSize.h], [8, -8]);
  const rotateY = useTransform(x, [0, windowSize.w], [-8, 8]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Mouse-reactive perspective container */}
      <motion.div
        className="w-full"
        style={{
          perspective: 1000,
        }}
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="pl-8 md:pl-16 lg:pl-24 pr-8 py-20"
        >
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="show"
          >
            {/* Chapter label */}
            <motion.p
              variants={fadeUp}
              className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase mb-8"
            >
              001 / Builder
            </motion.p>

            {/* Name display */}
            <div className="mb-8">
              <motion.h1
                variants={wipeIn}
                className="text-display font-black tracking-tighter text-white leading-none"
              >
                王金泽
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-2xl font-light text-[#555] tracking-widest mt-3"
              >
                JINZE WANG
              </motion.p>
            </div>

            {/* Role descriptor */}
            <motion.p
              variants={fadeUp}
              className="text-sm font-light text-[#999] tracking-widest uppercase mb-8"
            >
              独立开发者 &mdash; Builder &mdash; 数据工程师
            </motion.p>

            {/* Separator */}
            <motion.div
              variants={fadeUp}
              className="w-12 h-px bg-white/30 mb-8"
            />

            {/* One-liner */}
            <motion.p
              variants={fadeUp}
              className="text-lg font-light text-[#999] max-w-md leading-relaxed"
            >
              独立开发者，把想法变成产品，把产品推向用户。
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — falling line */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-mono text-[#555] tracking-widest mb-3">
          SCROLL
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-4 bg-white/60"
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

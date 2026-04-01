import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { contactInfo, socialLinks } from '../data';
import { fadeUp, wipeIn, staggerContainer } from '../lib/animations';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const emailItem = contactInfo.find((c) => c.label === 'Email');
  const phoneItem = contactInfo.find((c) => c.label === 'Phone');

  return (
    <section id="contact" className="py-32 md:py-40 bg-black relative">
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
          006 / Contact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left — big headline + contact */}
          <div className="md:col-span-2">
            <motion.div
              variants={staggerContainer(0.15)}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
            >
              <motion.h2
                variants={wipeIn}
                className="text-display font-black text-white leading-none mb-12"
              >
                聊聊.
              </motion.h2>

              {/* Email */}
              {emailItem && (
                <motion.div variants={fadeUp} className="mb-6">
                  <a
                    href={emailItem.href}
                    className="text-xl font-mono text-[#999] hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white/60 pb-1"
                  >
                    {emailItem.value}
                  </a>
                </motion.div>
              )}

              {/* Phone */}
              {phoneItem && (
                <motion.div variants={fadeUp} className="mb-10">
                  <a
                    href={phoneItem.href}
                    className="font-mono text-sm text-[#555] hover:text-[#999] transition-colors"
                  >
                    {phoneItem.value}
                  </a>
                </motion.div>
              )}

              {/* Social links */}
              <motion.div variants={fadeUp} className="flex items-center gap-1">
                {socialLinks.map((link, i) => (
                  <span key={i} className="flex items-center">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-[#555] hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                    {i < socialLinks.length - 1 && (
                      <span className="text-[#333] mx-2">/</span>
                    )}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — geo byline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            className="flex items-end md:justify-end"
          >
            <p className="text-xs font-mono text-[#333] tracking-widest leading-relaxed text-right">
              坐标北京
              <br />
              远程可
              <br />
              {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

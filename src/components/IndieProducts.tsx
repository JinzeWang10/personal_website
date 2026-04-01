import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { indieProducts } from '../data';
import { fadeUp, staggerContainer } from '../lib/animations';

const IndieProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expandedImages, setExpandedImages] = useState<number | null>(null);

  const toggleImages = (i: number) => {
    setExpandedImages(expandedImages === i ? null : i);
  };

  return (
    <section id="products" className="py-32 md:py-40 bg-black relative">
      <div className="absolute top-20 left-8 md:left-16 text-8xl font-black text-[#111] select-none pointer-events-none">
        03
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8" ref={ref}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="text-xs font-medium tracking-[0.3em] text-[#555] uppercase mb-16"
        >
          003 / Products
        </motion.p>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="space-y-16"
        >
          {indieProducts.map((product, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border-b border-[#222] pb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
                {/* Left: title + metrics */}
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-[#555] tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                    {product.title}
                  </h3>
                  {product.metrics && (
                    <p className="font-mono text-sm text-white tracking-wide leading-relaxed">
                      {product.metrics}
                    </p>
                  )}
                </div>

                {/* Right: description + tags + link */}
                <div className="md:col-span-3">
                  <p className="text-base font-light text-[#999] leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="font-mono text-xs text-[#555] border border-[#333] px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
                      >
                        查看项目
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {product.images && product.images.length > 0 && (
                      <button
                        data-cursor-hover
                        onClick={() => toggleImages(i)}
                        className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5 cursor-none"
                      >
                        {expandedImages === i ? '收起截图' : '查看截图'}
                        <motion.span
                          initial={false}
                          animate={{ rotate: expandedImages === i ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          &rarr;
                        </motion.span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Product images — collapsible */}
              <AnimatePresence>
                {expandedImages === i && product.images && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className={`mt-8 grid gap-4 ${
                      product.images.length >= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                    }`}>
                      {product.images.map((src, si) => (
                        <div key={si} className={`overflow-hidden ${
                          product.images!.length === 1 ? 'max-w-xs' : ''
                        }`}>
                          <img
                            src={src}
                            alt={`${product.title} 截图 ${si + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="chapter-line mt-32" />
    </section>
  );
};

export default IndieProducts;

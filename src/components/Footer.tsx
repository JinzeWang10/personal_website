const Footer = () => {
  return (
    <footer className="border-t border-[#222] py-8">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        <p className="text-xs font-mono text-[#555] tracking-widest">
          &copy; {new Date().getFullYear()} Jinze Wang &mdash; React + TypeScript + Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;

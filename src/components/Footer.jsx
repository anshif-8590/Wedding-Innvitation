const Footer = () => {
  return (
    <footer className="px-6 py-16 mt-10 lg:py-10 lg:mt-28 text-center">

      {/* Arabic Dua */}
      <p
        className="font-arabic text-lg text-primary mb-4"
        style={{ direction: "rtl" }}
      >
        بَارَكَ ٱللَّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
      </p>

      {/* English Translation */}
      <p className="text-body text-primary/70 max-w-xl mx-auto mb-8">
        “May Allah bless you both, and bless your union, and bring you together
        in goodness.”
      </p>

      {/* Divider */}
      <div className="w-20 h-[1px] mx-auto  bg-[var(--color-border)]" />

      {/* Copyright */}
      <p className="text-xs tracking-widest text-primary/60 uppercase">
        © 2026 Shafeeque & Afeefa Wedding
      </p>

    </footer>
  );
};

export default Footer;

import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="bg-transparent px-6 pt-14 pb-20 lg:pt-26 lg:pb-28 text-center">

        {/* Arabic */}
        <p className="text-arabic mb-4">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        {/* Translation */}
        <p className="text-body max-w-xl mx-auto mb-10">
          In the name of Allah, the most gracious, the most merciful
        </p>

        {/* Groom */}
        <h1 className="text-hero">
          UNAIS BIN BASHEER
        </h1>

        {/* Ampersand */}
        <div className="text-gold text-[28px] lg:text-[36px] my-4">
          &
        </div>

        {/* Bride */}
        <h1 className="text-hero">
          FATHIMA NAJIYA
        </h1>

        {/* Subtitle */}
        <p className="text-hero-sub mt-6">
          Are Getting Married
        </p>

        {/* Sub text */}
        <p className="text-body mt-3">
          Join us in celebrating this blessed union
        </p>

      </section>
    </>
  );
};

export default Hero;





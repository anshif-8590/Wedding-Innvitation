const Invitation = () => {
  return (
    <section className="px-6 py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">

        {/* Quran Verse */}
        <p className="text-arabic mb-4">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
        </p>

        <p className="text-body text-primary/70 max-w-2xl mx-auto mb-14">
          “And among His signs is that He created for you mates from among yourselves,
          that you may dwell in tranquility with them.”
          <br />
          <span className="italic">(Surah Ar-Rum 30:21)</span>
        </p>

        {/* ================= LOCAL MOVING LEAVES LAYER ================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <span className="leaf l1">❀</span>
          <span className="leaf l2">❀</span>
          <span className="leaf l3">❀</span>
          <span className="leaf l4">❀</span>
        </div>

        {/* ================= CARD WRAPPER ================= */}
        <div className="relative mt-14 z-10">

          {/* ================= CARD CONTAINER ================= */}
          <div className="relative rounded-2xl shadow-lg">

            {/* Card translucent background (allows leaves to be seen) */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid var(--color-border)",
                zIndex: 1,
              }}
            />

            {/* ================= CARD CONTENT ================= */}
            <div className="relative z-10 px-8 py-12">

              <p className="text-body mb-6">
                With joyous hearts and seeking the blessings of Allah (SWT),
                we cordially invite you and your family to witness and celebrate
                the Nikah ceremony of
              </p>

              {/* Names */}
              <div className="my-10">
                <p className="text-card-title mb-2">The Groom</p>
                <p className="text-section-title mb-6">
                  UNAIS BIN BASHEER
                </p>

                <p className="text-card-title mb-2">The Bride</p>
                <p className="text-section-title">
                  FATHIMA NAJIYA
                </p>
              </div>

              

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Invitation;

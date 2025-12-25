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
                  Muhammad Shafeeque Sa’adi
                </p>

                <p className="text-card-title mb-2">The Bride</p>
                <p className="text-section-title">
                  Afeefa Fathima Hadiya
                </p>
              </div>

              {/* Divider */}
              <div className="w-20 h-[2px] mx-auto my-8 bg-[var(--color-accent)]" />

              {/* Event Info */}
              <div className="grid gap-6 md:grid-cols-3 text-center mb-10">
                <div>
                  <p className="text-card-title mb-1">Date</p>
                  <p className="text-body">Saturday, 10 Jan 2026</p>
                </div>

                <div>
                  <p className="text-card-title mb-1">Venue</p>
                  <p className="text-body">
                    Badaru Swahaba Manzil<br />
                    Iringallur
                  </p>
                </div>

                <div>
                  <p className="text-card-title mb-1">Time</p>
                  <p className="text-body">11:00 AM onwards</p>
                </div>
              </div>

              {/* Google Maps CTA */}
              <a
                href="https://maps.google.com/?q=Badaru+Swahaba+Manzil+Iringallur"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1 px-6 py-3 rounded-full
                  border text-body font-medium transition
                  hover:bg-[var(--color-accent)] hover:text-white
                "
                style={{ borderColor: "var(--color-accent)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>

                View Location
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Invitation;

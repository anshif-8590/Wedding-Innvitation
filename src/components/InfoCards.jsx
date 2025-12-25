const InfoCards = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-section-title mb-4">
            Wedding Details
          </h2>
          <p className="text-section-sub max-w-xl mx-auto">
            We look forward to celebrating this special day with you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Date */}
          <div className="bg-white rounded-2xl p-8 shadow-lg lg:shadow-sm  lg:hover:shadow-lg transition ">
            <div className="mb-4 text-[var(--color-accent)]">
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <p className="text-card-title mb-1 text-center">
              Date
            </p>
            <p className="text-body text-center">
              Saturday, 10 January 2026
            </p>
          </div>

          {/* Venue */}
          <div className="bg-white rounded-2xl p-8 shadow-lg lg:shadow-sm  lg:hover:shadow-lg transition flex flex-col items-center  ">
            <div className="mb-4 text-[var(--color-accent)]">
              {/* Location Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
                />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </div>

            <p className="text-card-title mb-1 text-center">
              Venue
            </p>
            <p className="text-body text-center">
              Badaru Swahaba Manzil<br />
              Iringallur
            </p>
            {/* Google Maps CTA */}
              <a
                href="https://maps.app.goo.gl/fTTuTt25FMaKawWu7"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex mt-2 w-fit  items-center gap-1 px-3 py-1 rounded-full
                  border text-body font-medium transition
                  hover:bg-[var(--color-accent)] hover:text-white hover:shadow-lg
                "
                style={{ borderColor: "var(--color-accent)" }}
              >
                

                View Location
              </a>

          
          </div>

          {/* Time */}
          <div className="bg-white rounded-2xl p-8 shadow-lg lg:shadow-sm  lg:hover:shadow-lg transition">
            <div className="mb-4 text-[var(--color-accent)]">
              {/* Clock Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
            </div>

            <p className="text-card-title mb-1 text-center">
              Time
            </p>
            <p className="text-body text-center">
              11:00 AM onwards
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoCards;
// https://maps.google.com/?q=Badaru+Swahaba+Manzil+Iringallur
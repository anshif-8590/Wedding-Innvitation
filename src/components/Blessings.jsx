const comments = [
  {
    name: "Ameen & Family",
    message: "May Allah bless your union with love, mercy, and tranquility."
  },
  {
    name: "Farhana",
    message: "May your marriage be filled with patience, understanding, and endless blessings."
  },
  {
    name: "Rashid & Aisha",
    message: "Congratulations on this beautiful journey. May Allah grant you peace and barakah."
  },
  {
    name: "Nihal",
    message: "Alhamdulillah, congrats both ❤️"
  },
  {
    name: "Safvan",
    message: "Barakallahu lakuma."
  }
];

const Blessings = () => {
  return (
    <section className="px-6 py20 lg:py28">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER (UNCHANGED) ================= */}
        <div className="text-center mb-14">
          <h2 className="text-section-title mb-4">
            Blessings & Prayers
          </h2>
          <p className="text-section-sub max-w-xl mx-auto">
            Your prayers and kind words mean a lot to us.
            Leave a message and keep us in your duas.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid gap-12 lg:gap-0 lg:grid-cols-2 items-start">

          {/* ================= FORM (UPDATED) ================= */}
          <div
            className="mx-auto w-full max-w-sm p-6 rounded-2xl flex flex-col"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)"
            }}
          >
            <div className="space-y-4 flex-1">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 text-body focus:outline-none focus:ring-1"
                style={{ borderColor: "var(--color-border)" }}
              />

              <textarea
                placeholder="Write a short prayer or message for the couple…"
                className="w-full border rounded-lg px-4 py-3 text-body h-28 resize-none focus:outline-none focus:ring-1"
                style={{ borderColor: "var(--color-border)" }}
              />
            </div>

            {/* Reduced gap here */}
            <button
              className="mt-4 w-full py-3 rounded-lg font-medium transition"
              style={{
                backgroundColor: "#3f5f4b",
                color: "#ffffff"
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.backgroundColor = "#2f4f3a")
              }
              onMouseLeave={e =>
                (e.currentTarget.style.backgroundColor = "#3f5f4b")
              }
            >
              Send Blessing →
            </button>
          </div>

          {/* ================= COMMENTS (YOUR DESIGN) ================= */}
          <div className="h-[360px] overflow-y-auto pr-2 custom-scroll">
            {comments.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-lg px-4 py-3 mb-3
                  border-l-4 border-[var(--color-accent)]
                  shadow-sm hover:shadow-md transition
                "
              >
                <p className="font-medium text-primary mb-1">
                  {item.name}
                </p>
                <p className="text-body text-primary/70 italic">
                  “{item.message}”
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blessings;

const Blessings = () => {
  return (
    <section className=" px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-section-title mb-4">
            Blessings & Prayers
          </h2>
          <p className="text-section-sub max-w-xl mx-auto">
            Your prayers and kind words mean a lot to us.
            Leave a message and keep us in your duas.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">

          {/* ================= FORM ================= */}
          <div
            className="p-6 lg:p-8 h-[420px] flex flex-col border rounded-2xl"
            style={{ borderColor: "var(--color-border)" }}
          >
            <p className="text-label mb-6">
              Leave a Blessing
            </p>

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

            <button className="btn-primary mt-6 w-full py-3 rounded-lg font-medium">
              Send Blessing →
            </button>
          </div>

          {/* ================= COMMENTS ================= */}
          <div
            className="p-6 h-[420px] overflow-y-auto space-y-6 border rounded-2xl"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Comment
              name="Ameen & Family"
              message="May Allah bless your union with love, mercy, and tranquility."
            />

            <Comment
              name="Farhana"
              message="May your marriage be filled with patience, understanding, and endless blessings."
            />

            <Comment
              name="Rashid & Aisha"
              message="Congratulations on this beautiful journey. May Allah grant you peace and barakah."
            />

            <Comment
              name="Ameen & Family"
              message="Wishing you a lifetime of happiness together."
            />

            <Comment
              name="Farhana"
              message="Keep each other in your duas always."
            />

            <Comment
              name="Rashid & Aisha"
              message="May your home always be filled with imaan and love."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

/* ================= COMMENT ITEM ================= */

const Comment = ({ name, message }) => {
  return (
    <div className="relative pl-5">
      {/* Accent line */}
      <span
        className="absolute left-0 top-1 h-full w-[2px]"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      <p className="text-card-title mb-1">
        {name}
      </p>

      <p className="text-body italic">
        “{message}”
      </p>
    </div>
  );
};

export default Blessings;

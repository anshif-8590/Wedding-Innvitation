import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";


const Blessings = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= LOAD COMMENTS =================
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setComments(data);
  };

  // ================= SUBMIT COMMENT =================
  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) return;

    setLoading(true);

    const { error } = await supabase.from("comments").insert([
      {
        name: name.trim(),
        message: message.trim(),
      },
    ]);

    setLoading(false);

    if (!error) {
      setName("");
      setMessage("");
      fetchComments(); // refresh instantly
    }
  };

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

          {/* ================= FORM (DESIGN PRESERVED) ================= */}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-body focus:outline-none focus:ring-1"
                style={{ borderColor: "var(--color-border)" }}
              />

              <textarea
                placeholder="Write a short prayer or message for the couple…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-body h-28 resize-none focus:outline-none focus:ring-1"
                style={{ borderColor: "var(--color-border)" }}
              />
            </div>

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
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Blessing →"}
            </button>
          </div>

          {/* ================= COMMENTS (DESIGN UNCHANGED) ================= */}
          <div className="h-[360px] overflow-y-auto pr-2 custom-scroll">
            {comments.map((item) => (
              <div
                key={item.id}
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

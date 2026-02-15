import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(139,92,246,0.06),transparent_60%)]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="mb-4 flex justify-center">
              <span className="tech-badge">
                <span className="glow-dot" style={{ width: 6, height: 6 }} />
                Get in Touch
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact <span className="neon-text">Us</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Have questions about AI Production Studio? Want to discuss a partnership or
              request a demo? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Left: Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  value: "info@vision3.ai",
                  desc: "Response within 24 hours",
                },
                {
                  icon: "💬",
                  title: "Community",
                  value: "Discord Server",
                  desc: "Join our growing community",
                },
                {
                  icon: "🌐",
                  title: "Location",
                  value: "Global / Remote",
                  desc: "Serving creators worldwide",
                },
              ].map((info) => (
                <div key={info.title} className="glass-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-xl">{info.icon}</div>
                    <div>
                      <h3 className="text-sm font-bold mb-0.5">{info.title}</h3>
                      <p className="text-sm text-[var(--color-accent-cyan)]">{info.value}</p>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{info.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

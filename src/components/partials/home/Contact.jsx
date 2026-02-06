import { Icon } from "@iconify/react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactLinks = [
    { icon: "mdi:email-outline", label: "Email", value: "nabihaf567@gmail.com", href: "mailto:nabihaf567@gmail.com" },
    { icon: "mdi:linkedin", label: "LinkedIn", value: "linkedin.com/in/nabiha-fatima-b9a83a26a", href: "https://www.linkedin.com/in/nabiha-fatima-b9a83a26a/" },
    { icon: "mdi:github", label: "GitHub", value: "github.com/Nabiha-Fatima", href: "https://github.com/Nabiha-Fatima" },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = formData.subject || `New message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${subject}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:nabihaf567@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-secondary/95 py-16 sm:py-20 md:py-24">
      <div className="custom_container px-5 sm:px-6 md:px-0">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* Contact links – highlight style */}
          <div className="w-full lg:max-w-sm xl:max-w-md shrink-0 mb-10 lg:mb-0">
            <h3 className="font-poppins font-semibold text-white text-lg mb-4 sm:mb-5">
              Get in touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-xl bg-secondary border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-primary" width="24" height="24" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-roboto text-muted text-xs sm:text-sm">{item.label}</p>
                    <p className="font-poppins font-medium text-white text-sm sm:text-base truncate">
                      {item.value}
                    </p>
                  </div>
                  <Icon icon="mdi:open-in-new" className="text-muted shrink-0 ml-auto w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1 min-w-0">
            <h3 className="font-poppins font-semibold text-white text-lg mb-4 sm:mb-5">
              Send a message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-secondary border border-white/5 space-y-4 sm:space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <label className="block">
                  <span className="font-roboto text-muted text-sm mb-1.5 block">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted/60 font-roboto text-sm sm:text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="font-roboto text-muted text-sm mb-1.5 block">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted/60 font-roboto text-sm sm:text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-roboto text-muted text-sm mb-1.5 block">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of your message"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted/60 font-roboto text-sm sm:text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </label>
              <label className="block">
                <span className="font-roboto text-muted text-sm mb-1.5 block">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted/60 font-roboto text-sm sm:text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-y min-h-[100px] sm:min-h-[120px]"
                />
              </label>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-secondary font-poppins font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Mail, Phone, MapPin, Linkedin, Github, Send, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from '../components/ui/button';
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs.sendForm(
      'service_f7t5wcs',
      'template_5a52b0e',
      form.current,
      'wp2bHOqdxJjGTZ0rA'
    )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message ! I'll get back to you soon ✨");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Oops! Something went wrong. Please try again.");
        }
      )
      .finally(() => setSending(false));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={form}>
      <div className="font-serif px-4 py-15 bg-[#252c61b9] dark:bg-gradient-to-br-white sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#dcbddf] dark:text-[#4e62aa]" />
              <h1 className="text-4xl text-transparent md:text-5xl bg-gradient-to-br
        from-[#55c2f8]
        via-[#bab9ff]
        to-[#dcbddf]
        dark:from-[#571483]
        dark:via-[#6277c5]
        dark:to-[#820886] bg-clip-text">
                Connect With Me
              </h1>
              <Sparkles className="w-6 h-6 text-[#dcbddf] dark:text-[#4e62aa]" />
            </div>
            <p className="max-w-2xl mx-auto text-white">
              I'd love to hear from you! Please fill out the form to get into contact with me.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* my contact info */}
            <div className="space-y-6">
              <div className="p-8 border border-pink-100 shadow-xl dark:border-[#252c61b9] backdrop-blur-sm rounded-3xl">
                <h2 className="mb-6 text-2xl text-transparent bg-gradient-to-br
        from-[#55c2f8]
        to-[#dcbddf]
        dark:from-[#a52af7]
        dark:to-[#59355a] bg-clip-text">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 transition-transform bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl group-hover:scale-110">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm text-white">Email</h3>
                      <a href="mailto:kourtneygiles@outlook.com" className="text-white transition-colors hover:text-[#dcbddf]">
                        kourtneygiles@outlook.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 transition-transform bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl group-hover:scale-110">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm text-white">Phone</h3>
                      <a href="tel:+4438103289" className="text-white transition-colors hover:text-[#dcbddf]">
                        (443) 810-3289
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 transition-transform bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl group-hover:scale-110">
                      <MapPin className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm text-white">Location</h3>
                      <p className="text-white">Washington, DC</p>
                    </div>
                  </div>
                </div>

                {/* links */}
                <div className="pt-8 mt-8 border-t border-pink-100">
                  <h3 className="mb-4 text-sm text-white">Connect with me</h3>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/kourtney-giles-/" target="_blank" rel="noopener noreferrer" className="p-3 transition-transform bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl hover:scale-110">
                      <Linkedin className="w-5 h-5 text-purple-400" />
                    </a>
                    <a href="https://github.com/eppleee" target="_blank" rel="noopener noreferrer" className="p-3 transition-transform bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl hover:scale-110">
                      <Github className="w-5 h-5 text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border border-purple-100 shadow-xl dark:border-[#252c61b9] backdrop-blur-sm rounded-3xl">
              <h2 className="mb-6 text-2xl text-transparent bg-gradient-to-br
        from-[#55c2f8]
        to-[#bab9ff]
        dark:from-[#7516b4]
        dark:to-[#5c74c9] 
        bg-clip-text">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-white">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 text-black bg-white border-pink-200 focus:border-purple-400 focus:ring-purple-400 rounded-xl"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-white">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 text-black bg-white border-purple-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl"
                    placeholder="placeholder@outlook.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-white">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 text-black bg-white border-blue-200 resize-none focus:border-pink-400 focus:ring-pink-400 rounded-xl"
                    placeholder="I'd love to connect with you about..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-white transition-all shadow-lg bg-gradient-to-br
        from-[#55c2f8]
        via-[#bab9ff]
        to-[#dcbddf]
        dark:from-[#420c66]
        dark:via-[#4e62aa]
        dark:to-[#640268] hover:from-[#dcbddf] hover:via-[#bab9ff] hover:to-[#55c2f8] hover:dark:from-[#640268]
        hover:dark:via-[#4e62aa]
       hover:dark:to-[#420c66] rounded-xl hover:scale-105"
                  disabled={sending}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {sending ? "Sending..." : "Send Message"}
                </Button>

                {status && <p className="mt-2 text-sm text-center text-gray-700">{status}</p>}
              </form>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-white">
              Looking forward to hearing from you!💗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
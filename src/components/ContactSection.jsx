import { Mail, Github, Linkedin, Sparkles, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactSection = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className={`py-32 relative min-h-screen flex items-center ${theme.accent}`}>
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slide-in-on-scroll">
            Let's Work Together
          </h2>
          <p className={`text-xl ${theme.textSecondary} mb-8 max-w-2xl mx-auto animate-slide-up-on-scroll`}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`${theme.cardBg} p-8 rounded-2xl shadow-2xl border ${theme.border} animate-slide-up-on-scroll`}>
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              <span>Send Me a Message</span>
            </h3>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${theme.text} mb-2 flex items-center space-x-2`}>
                    <User className="w-4 h-4" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${theme.cardBg} ${theme.text} border ${theme.border} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${theme.text} mb-2 flex items-center space-x-2`}>
                    <Mail className="w-4 h-4" />
                    <span>Your Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${theme.cardBg} ${theme.text} border ${theme.border} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${theme.text} mb-2 flex items-center space-x-2`}>
                    <MessageSquare className="w-4 h-4" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg ${theme.cardBg} ${theme.text} border ${theme.border} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-vertical`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Send Message</span>
                    <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                  ✨ Thanks! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                  ❌ Oops! Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-slide-up-on-scroll animation-delay-300">
            <div className={`${theme.cardBg} p-8 rounded-2xl shadow-2xl border ${theme.border}`}>
              <h3 className="text-2xl font-bold mb-6">Other Ways to Connect</h3>
              <p className={`${theme.textSecondary} mb-8`}>
                Prefer a more direct approach? Feel free to reach out through any of these channels:
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:tomisinadeyinka352@gmail.com"
                  className={`flex items-center space-x-3 p-4 rounded-lg ${theme.accent} hover:bg-blue-500/20 transition-all duration-300 group`}
                >
                  <Mail className="w-5 h-5 text-blue-500 group-hover:animate-bounce" />
                  <span>tomisinadeyinka352@gmail.com</span>
                </a>
              </div>

              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.github.com/Vercetti1-" 
                  target="_blank"
                  className={`p-4 ${theme.cardBg} rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25`}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tomisin-adeyinka-46a094126" 
                  target="_blank"
                  className={`p-4 ${theme.cardBg} rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className={`${theme.cardBg} p-8 rounded-2xl shadow-2xl border ${theme.border}`}>
              <h4 className="text-lg font-semibold mb-4">Quick Response Promise</h4>
              <p className={`${theme.textSecondary} text-sm`}>
                I typically respond to all inquiries within 24 hours. Looking forward to hearing from you and discussing how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
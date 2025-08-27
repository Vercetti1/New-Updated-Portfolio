import { ChevronDown, Github, Linkedin, Mail, Gamepad2, Sparkles, FileText } from 'lucide-react';

const HeroSection = ({ theme, typingText, openGame, scrollToSection, resumeLink="https://resume.io/r/jdrlgivmJ" }) => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-xl animate-float-${i % 3}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
      <div className="animate-hero-entrance">
        <div className="-mb-3" >
          <span className={`text-xl ${theme.textMuted} animate-fade-in-slow`}>Hello, I'm</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient-shift px-4 py-2 leading-tight">
          Tomisin Adeyinka
        </h1>
        
        <div className="h-12 sm:h-16 flex items-center justify-center mb-8">
          <p className={`text-xl sm:text-2xl md:text-3xl ${theme.textSecondary} font-mono`}>
            {typingText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        
        <p className={`text-base sm:text-lg ${theme.textMuted} mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-1000`}>
          Crafting beautiful, responsive web experiences with modern technologies and creative solutions. 
          Let's build something amazing together!
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-1500">
          <a 
            href="https://www.github.com/Vercetti1" 
            target="_blank"
            className={`group p-4 ${theme.cardBg} rounded-full transition-all duration-500 hover:scale-125 hover:-rotate-12 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            <Github className="w-6 h-6 relative z-10 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/tomisin-adeyinka-46a094126" 
            target="_blank"
            className={`group p-4 ${theme.cardBg} rounded-full transition-all duration-500 hover:scale-125 hover:-rotate-12 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            <Linkedin className="w-6 h-6 relative z-10 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a 
            href="mailto:tomisinadeyinka352@gmail.com"
            className={`group p-4 ${theme.cardBg} rounded-full transition-all duration-500 hover:scale-125 hover:-rotate-12 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            <Mail className="w-6 h-6 relative z-10 group-hover:text-purple-400 transition-colors duration-300" />
          </a>
          <a 
            href={resumeLink}
            target="_blank"
            className={`group p-4 ${theme.cardBg} rounded-full transition-all duration-500 hover:scale-125 hover:-rotate-12 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            <FileText className="w-6 h-6 relative z-10 group-hover:text-green-400 transition-colors duration-300" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-2000">
          <a
            href={resumeLink}
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-teal-600 px-8 py-4 rounded-full text-white font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>View Resume</span>
            <Sparkles className="w-5 h-5 animate-spin-slow" />
          </a>

          <button
            onClick={openGame}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center space-x-2"
          >
            <Gamepad2 className="w-5 h-5" />
            <span>Wanna Play Tic-Tac-Toe?</span>
          </button>
        </div>
      </div>
    </div>

  </section>
);

export default HeroSection;
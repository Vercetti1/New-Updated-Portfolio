import { useState, useRef } from 'react';
import { Sun, Moon, Gamepad2 } from 'lucide-react';

const clickSoundUrl = "https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b44.mp3";

const NavBar = ({ theme, isScrolled, activeSection, scrollToSection, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const clickAudioRef = useRef(null);

  if (!clickAudioRef.current) {
    clickAudioRef.current = new window.Audio(clickSoundUrl);
    clickAudioRef.current.volume = 0.5;
  }

  const handleThemeClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play();
    }
    toggleTheme();
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-700 ${isScrolled ? (theme.isDark ? 'bg-gray-900/95' : 'bg-white/95') + ' backdrop-blur-xl shadow-2xl border-b ' + theme.border : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer transform hover:scale-110 transition-all duration-300"
            onClick={() => scrollToSection('hero')}
          >
            &lt;T/&gt;
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['hero', 'about', 'projects', 'game', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:scale-110 relative group font-medium ${
                  activeSection === section ? 'text-blue-400' : theme.textSecondary
                }`}
              >
                {section === 'hero' ? 'Home' : section === 'game' ? 'Play' : section}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full ${activeSection === section ? 'w-full' : ''}`}></span>
                {section === 'game' && <Gamepad2 className="inline w-4 h-4 ml-1" />}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleThemeClick}
              className={`p-2 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-180 ${theme.cardBg} shadow-lg hover:shadow-xl`}
            >
              {theme.isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 ${theme.text} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 ${theme.text} transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 ${theme.text} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          <div className="hidden md:block">
            <button
              onClick={handleThemeClick}
              className={`p-3 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-180 ${theme.cardBg} shadow-lg hover:shadow-xl`}
            >
              {theme.isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden mt-4 p-6 rounded-xl ${theme.cardBg} shadow-2xl animate-slide-down`}>
            {['hero', 'about', 'projects', 'game', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 mb-2 ${
                  activeSection === section 
                    ? 'text-blue-400 bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
                    : theme.textSecondary + ' hover:' + theme.text
                }`}
              >
                {section === 'hero' ? 'Home' : section === 'game' ? 'Play Game' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
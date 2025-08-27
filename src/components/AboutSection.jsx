import { Code, Palette, Monitor } from 'lucide-react';
import tomisinImg from '../assets/BRHS2445.png';

const AboutSection = ({ theme }) => (
  <section id="about" className={`py-20 ${theme.accent} transition-colors duration-500 relative`}>
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slide-in-on-scroll">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-right-on-scroll">
          <p className={`${theme.textSecondary} text-lg leading-relaxed transform transition-all duration-500 hover:scale-105`}>
            I'm a passionate frontend developer with expertise in creating engaging, 
            user-friendly web applications. I specialize in React, modern JavaScript, 
            and responsive design principles.
          </p>
          <p className={`${theme.textSecondary} text-lg leading-relaxed transform transition-all duration-500 hover:scale-105`}>
            When I'm not coding, you'll find me exploring new frameworks, contributing to 
            open-source projects, and staying updated with the latest web development trends.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div 
              className={`text-center p-6 ${theme.cardBg} rounded-xl hover:${theme.isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-2xl group cursor-pointer`}
            >
              <Code className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:animate-spin transition-all duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">Frontend</h3>
              <p className={`text-sm ${theme.textMuted} group-hover:${theme.textSecondary} transition-colors duration-300`}>React, Next.js, TailwindCSS</p>
            </div>
            <div 
              className={`text-center p-6 ${theme.cardBg} rounded-xl hover:${theme.isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-2xl group cursor-pointer`}
            >
              <Palette className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:animate-pulse transition-all duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">Design</h3>
              <p className={`text-sm ${theme.textMuted} group-hover:${theme.textSecondary} transition-colors duration-300`}>UI/UX, Figma</p>
            </div>
            <div 
              className={`text-center p-6 ${theme.cardBg} rounded-xl hover:${theme.isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-2xl group cursor-pointer`}
            >
              <Monitor className="w-8 h-8 mx-auto mb-3 text-pink-400 group-hover:animate-bounce transition-all duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-pink-400 transition-colors duration-300">Web Apps</h3>
              <p className={`text-sm ${theme.textMuted} group-hover:${theme.textSecondary} transition-colors duration-300`}>Full Stack, APIs</p>
            </div>
          </div>
        </div>
        <div className="relative animate-slide-left-on-scroll">
          <div className="w-80 h-full mx-auto overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 group relative">
            <img 
              src={tomisinImg} 
              alt="Tomisin Adeyinka" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse-slow opacity-70"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse-slower opacity-70"></div>
          <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-float-gentle opacity-50"></div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
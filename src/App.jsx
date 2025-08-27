import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
// import GameSection from './components/GameSection';
import GameModal from './components/GameModal';
import ScrollToTop from './components/ScrollToTop';
import CanvasBackground from './components/CanvasBackground';
import CursorFollower from './components/CursorFollower';
import ContactSection from './components/ContactSection.jsx'

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showGame, setShowGame] = useState(false);
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameWinner, setGameWinner] = useState(null);
  const [gameScore, setGameScore] = useState({ player: 0, ai: 0, draws: 0 });
  const [particles, setParticles] = useState([]);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const intervalRef = useRef(null);

  const texts = [
    "Frontend Developer",
    "React Developer", 
    "Problem Solver",
    "Creative Coder"
  ];

  const projects = [
    {
      title: "Tic-Tac-Toe Game",
      description: "Interactive tic-tac-toe game with AI opponent, multiple difficulty levels, and smooth animations.",
      tech: ["React", "JavaScript", "CSS3", "AI Algorithm"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
      github: "https://github.com/Vercetti1-/tic-tac-toe",
      live: "#",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Anonymous Web App",
      description: "Secure anonymous communication platform with end-to-end encryption and real-time messaging.",
      tech: ["React", "Node.js", "Socket.io", "Cryptography"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      github: "https://github.com/Vercetti1-/anonymous-app",
      live: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "E-Wallet Web App",
      description: "Digital wallet application with transaction history, budget tracking, and secure payments.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      github: "https://github.com/Vercetti1-/e-wallet",
      live: "#",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Gemini AI Chatbot Clone",
      description: "AI-powered chatbot interface with natural language processing and contextual responses.",
      tech: ["React", "Google AI", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      github: "https://github.com/Vercetti1-/gemini-clone",
      live: "#",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Foodie Web App",
      description: "Food discovery platform with restaurant reviews, menu browsing, and online ordering system.",
      tech: ["React", "Firebase", "Geolocation", "Payment API"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      github: "https://github.com/Vercetti1-/foodie-app",
      live: "#",
      color: "from-red-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypingText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          charIndex = 0;
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 10,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 3 - 1,
      life: 1,
      decay: Math.random() * 0.02 + 0.005,
      size: Math.random() * 3 + 1,
      color: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][Math.floor(Math.random() * 4)]
    });

    const updateParticles = () => {
      setParticles(prev => {
        const updated = prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - particle.decay
        })).filter(particle => particle.life > 0);

        if (Math.random() < 0.1 && updated.length < 50) {
          updated.push(createParticle());
        }

        return updated;
      });
    };

    intervalRef.current = setInterval(updateParticles, 50);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 300);
      
      const sections = ['hero', 'about', 'projects', 'game', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes('') ? null : 'draw';
  };

  const makeAIMove = (board) => {
    const availableMoves = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
    
    for (let move of availableMoves) {
      const newBoard = [...board];
      newBoard[move] = 'O';
      if (checkWinner(newBoard) === 'O') return move;
    }
    
    for (let move of availableMoves) {
      const newBoard = [...board];
      newBoard[move] = 'X';
      if (checkWinner(newBoard) === 'X') return move;
    }
    
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const handleGameMove = (index) => {
    if (gameBoard[index] || gameWinner || !isPlayerTurn) return;
    
    const newBoard = [...gameBoard];
    newBoard[index] = 'X';
    setGameBoard(newBoard);
    setIsPlayerTurn(false);
    
    const winner = checkWinner(newBoard);
    if (winner) {
      setGameWinner(winner);
      if (winner === 'X') {
        setGameScore(prev => ({ ...prev, player: prev.player + 1 }));
      } else if (winner === 'draw') {
        setGameScore(prev => ({ ...prev, draws: prev.draws + 1 }));
      }
      return;
    }
    
    setTimeout(() => {
      const aiMove = makeAIMove(newBoard);
      if (aiMove !== undefined) {
        newBoard[aiMove] = 'O';
        setGameBoard(newBoard);
        
        const aiWinner = checkWinner(newBoard);
        if (aiWinner) {
          setGameWinner(aiWinner);
          if (aiWinner === 'O') {
            setGameScore(prev => ({ ...prev, ai: prev.ai + 1 }));
          } else if (aiWinner === 'draw') {
            setGameScore(prev => ({ ...prev, draws: prev.draws + 1 }));
          }
        } else {
          setIsPlayerTurn(true);
        }
      }
    }, 500);
  };

  const resetGame = () => {
    setGameBoard(Array(9).fill(''));
    setIsPlayerTurn(true);
    setGameWinner(null);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const openGame = () => {
    setShowGame(true);
  };

  const closeGame = () => {
    setShowGame(false);
  };

  const theme = {
    bg: isDark ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDark ? 'bg-gray-800' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-500',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
    accent: isDark ? 'bg-gray-800/50' : 'bg-gray-100/50',
    isDark
  };

  return (
    <>
    <CursorFollower mousePosition={mousePosition} />
    <div className={`${theme.bg} ${theme.text} min-h-screen overflow-x-hidden transition-all duration-700 ease-in-out relative`}>
      <CanvasBackground particles={particles} isDark={isDark} />
      <NavBar 
        theme={theme} 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        toggleTheme={toggleTheme} 
      />
      <HeroSection 
        theme={theme} 
        typingText={typingText} 
        openGame={openGame} 
        scrollToSection={scrollToSection} 
      />
      <AboutSection theme={theme} />
      <ProjectsSection theme={theme} projects={projects} />
      {/* <GameSection 
        theme={theme} 
        gameBoard={gameBoard} 
        gameWinner={gameWinner} 
        isPlayerTurn={isPlayerTurn} 
        gameScore={gameScore} 
        handleGameMove={handleGameMove} 
        resetGame={resetGame} 
      /> */}
      <ContactSection theme={theme} />
      {showGame && (
        <GameModal 
          theme={theme} 
          gameBoard={gameBoard} 
          gameWinner={gameWinner} 
          isPlayerTurn={isPlayerTurn} 
          gameScore={gameScore} 
          handleGameMove={handleGameMove} 
          resetGame={resetGame} 
          closeGame={closeGame} 
        />
      )}
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
    </>
  );
};

export default App;
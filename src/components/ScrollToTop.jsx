import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ showScrollTop, scrollToTop }) => (
  showScrollTop && (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500/50 z-40 animate-bounce-gentle group"
    >
      <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
    </button>
  )
);

export default ScrollToTop;
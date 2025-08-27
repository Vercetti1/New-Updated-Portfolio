import { RotateCcw, X } from 'lucide-react';

const GameModal = ({ theme, gameBoard, gameWinner, isPlayerTurn, gameScore, handleGameMove, resetGame, closeGame }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
    <div className={`${theme.cardBg} rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scale-in relative`}>
      <button
        onClick={closeGame}
        className="absolute top-4 right-4 p-2 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Tic-Tac-Toe Challenge
      </h3>
      
      <div className={`${theme.accent} rounded-lg p-4 mb-6`}>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-green-400">{gameScore.player}</div>
            <div className={`text-sm ${theme.textMuted}`}>You</div>
          </div>
          <div>
            <div className="text-xl font-bold text-yellow-400">{gameScore.draws}</div>
            <div className={`text-sm ${theme.textMuted}`}>Draws</div>
          </div>
          <div>
            <div className="text-xl font-bold text-red-400">{gameScore.ai}</div>
            <div className={`text-sm ${theme.textMuted}`}>AI</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-6">
        {gameBoard.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleGameMove(index)}
            className={`aspect-square ${theme.cardBg} border-2 ${theme.border} rounded-lg flex items-center justify-center text-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              cell === 'X' ? 'text-blue-400 bg-blue-500/10 border-blue-400' : 
              cell === 'O' ? 'text-red-400 bg-red-500/10 border-red-400' : 
              'hover:bg-gray-500/10 hover:border-gray-400'
            }`}
            disabled={!!cell || !!gameWinner || !isPlayerTurn}
          >
            {cell}
          </button>
        ))}
      </div>
      
      <div className="text-center mb-6">
        {gameWinner ? (
          <div>
            <p className={`text-lg font-bold mb-2 ${
              gameWinner === 'X' ? 'text-green-400' : 
              gameWinner === 'O' ? 'text-red-400' : 'text-yellow-400'
            }`}>
              {gameWinner === 'X' ? '🎉 You Win!' : 
               gameWinner === 'O' ? '🤖 AI Wins!' : '🤝 It\'s a Draw!'}
            </p>
          </div>
        ) : (
          <p className={`text-lg ${theme.textSecondary}`}>
            {isPlayerTurn ? 'Your Turn (X)' : 'AI is thinking...'}
            {!isPlayerTurn && <span className="ml-2 animate-spin">🤖</span>}
          </p>
        )}
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={resetGame}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <RotateCcw className="w-4 h-4" />
          <span>New Game</span>
        </button>
      </div>
    </div>
  </div>
);

export default GameModal;
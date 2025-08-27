// import { Trophy, RotateCcw } from 'lucide-react';

// const GameSection = ({ theme, gameBoard, gameWinner, isPlayerTurn, gameScore, handleGameMove, resetGame }) => (
//   <section id="game" className={`py-20 ${theme.accent} transition-colors duration-500 relative`}>
//     <div className="container mx-auto px-4 sm:px-6 text-center">
//       <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slide-in-on-scroll">
//         Interactive Gaming Zone
//       </h2>
//       <p className={`text-xl ${theme.textSecondary} mb-12 max-w-2xl mx-auto animate-slide-up-on-scroll`}>
//         Challenge yourself with a game of Tic-Tac-Toe! Test your skills against an intelligent AI opponent.
//       </p>
      
//       <div className="max-w-md mx-auto">
//         <div className={`${theme.cardBg} rounded-xl p-6 mb-8 shadow-lg`}>
//           <h3 className="text-lg font-bold mb-4 flex items-center justify-center">
//             <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
//             Game Statistics
//           </h3>
//           <div className="grid grid-cols-3 gap-4">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-green-400">{gameScore.player}</div>
//               <div className={`text-sm ${theme.textMuted}`}>Wins</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-yellow-400">{gameScore.draws}</div>
//               <div className={`text-sm ${theme.textMuted}`}>Draws</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-red-400">{gameScore.ai}</div>
//               <div className={`text-sm ${theme.textMuted}`}>AI Wins</div>
//             </div>
//           </div>
//         </div>

//         <div className={`${theme.cardBg} rounded-xl p-6 shadow-xl`}>
//           <div className="grid grid-cols-3 gap-2 mb-6">
//             {gameBoard.map((cell, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleGameMove(index)}
//                 className={`aspect-square ${theme.cardBg} border-2 ${theme.border} rounded-lg flex items-center justify-center text-3xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
//                   cell === 'X' ? 'text-blue-400 bg-blue-500/10' : 
//                   cell === 'O' ? 'text-red-400 bg-red-500/10' : 
//                   'hover:bg-gray-500/10'
//                 }`}
//                 disabled={!!cell || !!gameWinner || !isPlayerTurn}
//               >
//                 {cell}
//               </button>
//             ))}
//           </div>
          
//           <div className="mb-4">
//             {gameWinner ? (
//               <div className="text-center">
//                 <p className={`text-lg font-bold mb-2 ${
//                   gameWinner === 'X' ? 'text-green-400' : 
//                   gameWinner === 'O' ? 'text-red-400' : 'text-yellow-400'
//                 }`}>
//                   {gameWinner === 'X' ? '🎉 You Win!' : 
//                    gameWinner === 'O' ? '🤖 AI Wins!' : '🤝 It\'s a Draw!'}
//                 </p>
//               </div>
//             ) : (
//               <p className={`text-lg ${theme.textSecondary} text-center`}>
//                 {isPlayerTurn ? 'Your Turn (X)' : 'AI Thinking...'}
//                 {!isPlayerTurn && <span className="ml-2 animate-spin">🤔</span>}
//               </p>
//             )}
//           </div>

//           <div className="flex justify-center space-x-4">
//             <button
//               onClick={resetGame}
//               className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               <RotateCcw className="w-4 h-4" />
//               <span>New Game</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default GameSection;
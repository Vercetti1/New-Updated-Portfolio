const CursorFollower = ({ mousePosition }) => (
  <>
    <div
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <div
        className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-70 transition-all duration-100 ease-out"
        style={{
          transform: `scale(${Math.sin(Date.now() * 0.005) * 0.3 + 1})`,
        }}
      />
    </div>
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `scale(${0.8 - i * 0.2})`,
          opacity: 0.3 - i * 0.1,
          transitionDelay: `${i * 50}ms`,
        }}
        className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-100 ease-out"
      />
    ))}
  </>
);

export default CursorFollower;
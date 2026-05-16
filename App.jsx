export default function BahadirIremGame() {
      </div>
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        autoPlay
        src="/barbar.mp3"
      />
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-pink-700">💖 Bahadır & İrem</h1>

        <button
          onClick={() => setMusicOn(!musicOn)}
          className="bg-white/50 px-4 py-2 rounded-xl shadow"
        >
          {musicOn ? "🎵" : "🔇"}
        </button>
      </div>

      <div className="text-center mb-6">
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 shadow-xl inline-block max-w-md">
          <p className="text-sm text-gray-500 mb-2">Tur {round}/10</p>
          <h2 className="text-2xl font-bold text-pink-700">{question}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/40 rounded-3xl p-4 shadow-xl">
          <h3 className="text-xl font-bold text-center mb-4 text-pink-600">Bahadır 🩵</h3>
          <div className="grid gap-3">
            {player1.map((card, index) => (
              <button
                key={index}
                onClick={() => selectCard(1, card)}
                className="bg-pink-200 hover:scale-105 transition rounded-2xl p-3 shadow"
              >
                {card}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/40 rounded-3xl p-4 shadow-xl">
          <h3 className="text-xl font-bold text-center mb-4 text-blue-600">İrem 🌸</h3>
          <div className="grid gap-3">
            {player2.map((card, index) => (
              <button
                key={index}
                onClick={() => selectCard(2, card)}
                className="bg-blue-200 hover:scale-105 transition rounded-2xl p-3 shadow"
              >
                {card}
              </button>
            ))}
          </div>
        </div>
      </div>

      {(selected1 || selected2) && (
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 shadow-xl text-center mb-6 max-w-lg mx-auto animate-bounce">
          <h3 className="text-xl font-bold mb-4 text-pink-700">Seçilen Kartlar 💌</h3>
          <div className="space-y-3">
            {selected1 && (
              <div className="bg-pink-200 rounded-2xl p-3">🩵 Bahadır: {selected1}</div>
            )}
            {selected2 && (
              <div className="bg-blue-200 rounded-2xl p-3">🌸 İrem: {selected2}</div>
            )}
          </div>
        </div>
      )}

      {selected1 && selected2 && (
        <div className="text-center">
          <button
            onClick={nextRound}
            className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-8 py-4 rounded-2xl text-xl shadow-2xl hover:scale-105 transition"
          >
            Sonraki Tur ✨
          </button>
        </div>
      )}
    </div>
        </>
    );
}

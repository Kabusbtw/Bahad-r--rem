import React from "react";

export default function BahadirIremGame() {
  const questions = [
    "Beni en hızlı sinirlendiren şey",
    "Bizim ilişkimizi özetleyen şey",
    "İlgi beklerken diğer kişinin işi çıkmıştır",
    "En dramatik olduğumuz an",
    "Birbirimize en çok söylediğimiz şey",
    "Bu ilişkide en çok kim kıskanç?",
    "Tartışma sonrası ilk yapılan şey",
    "Bizi anlatan kelime"
  ];

  const allAnswers = [
    "Anlaşılmamak",
    "Funda ile buluşmadan bahsedilmesi",
    "Anlayış",
    "Bağlılık",
    "Tutku",
    "Trip atarım",
    "Küserim",
    "Döverim 😭",
    "Ağlarım",
    "Bebek zombi",
    "Sincabım",
    "Koalam",
    "Eşşek",
    "Ayı",
    "Fil",
    "Maymun"
  ];

  const randomCards = () => {
    const shuffled = [...allAnswers].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  };

  const randomQuestion = () => {
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const [started, setStarted] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [question, setQuestion] = React.useState(randomQuestion());
  const [player1, setPlayer1] = React.useState(randomCards());
  const [player2, setPlayer2] = React.useState(randomCards());
  const [selected1, setSelected1] = React.useState(null);
  const [selected2, setSelected2] = React.useState(null);

  const nextRound = () => {
    setQuestion(randomQuestion());
    setPlayer1(randomCards());
    setPlayer2(randomCards());
    setSelected1(null);
    setSelected2(null);
  };

  if (finished) {
    return (
      <div style={{padding:40,textAlign:"center"}}>
        <h1>💖 Bahadır & İrem 💖</h1>
        <p>
          Doğum günün kutlu olsun hayatım tekrar ve tekrardan seni çok çok çoook seviyorum 💕
        </p>
      </div>
    );
  }

  if (!started) {
    return (
      <div style={{padding:40,textAlign:"center"}}>
        <h1>Bahadır & İrem</h1>
        <button onClick={() => setStarted(true)}>Oyuna Başla 💌</button>
      </div>
    );
  }

  return (
    <div style={{padding:20}}>
      <h2>{question}</h2>

      <div style={{display:"flex",gap:20}}>
        <div>
          <h3>Bahadır</h3>
          {player1.map((card,index)=>(
            <button
              key={index}
              onClick={()=>setSelected1(card)}
              style={{display:"block",marginBottom:10}}
            >
              {card}
            </button>
          ))}
        </div>

        <div>
          <h3>İrem</h3>
          {player2.map((card,index)=>(
            <button
              key={index}
              onClick={()=>setSelected2(card)}
              style={{display:"block",marginBottom:10}}
            >
              {card}
            </button>
          ))}
        </div>
      </div>

      {selected1 && selected2 && (
        <div style={{marginTop:30}}>
          <p>🩵 Bahadır: {selected1}</p>
          <p>🌸 İrem: {selected2}</p>
          <button onClick={nextRound}>Sonraki Tur ✨</button>
        </div>
      )}
    </div>
  );
}

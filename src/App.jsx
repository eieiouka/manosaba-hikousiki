export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="logo-area">
          <div className="logo-main">魔法少女ノ魔女裁判</div>
          <div className="logo-sub">非公式ファンサイト</div>
        </div>

        <nav className="nav">
          <a href="#characters">キャラクター紹介</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-overlay">
          <section className="hero-inner">
            <p className="mini">made by 計画性のないナノカちゃん</p>
            <h1>魔法少女ノ魔女裁判</h1>
            <p className="desc">
              ※ネタバレ注意
            </p>

            <a href="#characters" className="hero-button">
              キャラクターを見る
            </a>
          </section>
        </div>
      </main>

      <section id="characters" className="characters">
        <div className="section-title-wrap">
          <p className="section-mini">CHARACTER</p>
          <h2 className="section-title">キャラクター紹介</h2>
        </div>

        <article className="character-feature">
          <img
            src="/character01.png"
            alt="キャラクター名"
            className="character-image"
          />

          <div className="character-text">
            <p className="character-label">囚人番号 658</p>
            <h3>桜羽 エマ</h3>
            <p className="character-desc">
              読み：バカイヌ<br />
              他人に嫌われるだけで自殺するメンヘラで、トラウマを刺激すると「シネシネbot」と化す。<br />
              わざと失敗を繰り返して、他人を振り回す身勝手な少女。人が死んだ裁判でも、意味不明な発言を繰り返す。<br />
              推理ができないバカ犬の分際で、自分のことを天才かなにかだと思っている。総当たりするローラー作戦を推理とは呼ばない。<br />
              普段は橘シェリーや遠野ハンナ、サイコパス半泣き女と行動をともにしているが、いざ魔女裁判で犯人が見つからないと、速攻で吊られる人望のなさが特徴。<br />
              そうなってから「やだ、助けてよぉ」などと命乞いを始めるが、誰も助けには来ない。遠野ハンナの処刑時は助けに行った橘シェリーもダンマリである。興味がないのだろう。
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
import "./Hero.css";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-overlay">
        <section className="hero-inner">
          <p className="mini">made by 計画性しかないナノちゃん</p>
          <h1>魔法少女ノ魔女裁判</h1>
          <p className="desc">※ネタバレ注意</p>

          <a href="#characters" className="hero-button">
            キャラクターを見る
          </a>
        </section>
      </div>
    </main>
  );
}
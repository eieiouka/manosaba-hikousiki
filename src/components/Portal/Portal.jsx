import "./Portal.css";

export default function Portal() {
  return (
    <section id="portal" className="portal">
      <div className="section-title-wrap">
        <p className="section-mini">PORTAL</p>
        <h2 className="section-title">ナノちゃんポータル</h2>
      </div>

      <a
        href="https://nanochan-portal.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="portal-card"
      >
        <img src="/portal.png" alt="ナノちゃんポータル" />

        <div className="portal-content">
          <h3>ナノちゃんポータル</h3>
          <p>
            このHPの制作者は私よ。
          </p>
        </div>
      </a>
    </section>
  );
}
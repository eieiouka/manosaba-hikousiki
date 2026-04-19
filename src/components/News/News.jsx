import "./News.css";

export default function News() {
  return (
    <section id="news" className="news">
      <div className="section-title-wrap">
        <p className="section-mini">NEWS</p>
        <h2 className="section-title">最新情報</h2>
      </div>

      <div className="news-list">
        <article className="news-card">
          <p className="news-date">2026.04.19</p>
          <h3 className="news-heading">魔法少女ノ魔女裁判　PlayStation版のリリースが決定</h3>
          <p className="news-text">
            PlayStation版では、黒部ナノカを主人公としてプレイすることができます。
          </p>
        </article>

        <article className="news-card">
          <p className="news-date">2026.04.17</p>
          <h3 className="news-heading">炙り瓶の制作　中温帯が最も危険であることが判明</h3>
          <p className="news-text">
            先端ガラス熱応力研究所の調査により、ガラスは100℃〜300℃の温度帯において内部圧力が急激に上昇し、ヒビ割れが発生しやすくなることが明らかになりました。
          </p>
        </article>

        <article className="news-card">
          <p className="news-date">2026.04.16</p>
          <h3 className="news-heading">「ボタンを押しただけ」訴えを却下、死刑判決が確定</h3>
          <p className="news-text">
            紫藤アリサ殺害事件の容疑者である桜羽エマは、「地下室のボタンを操作しただけ」と主張していましたが、先日午前に死刑判決が確定しました。また、黒部ナノカの遺体も発見されており、警察は余罪の可能性について捜査を進めています。
          </p>
        </article>
      </div>
    </section>
  );
}
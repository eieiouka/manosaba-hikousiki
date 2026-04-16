import "./Character.css";

export default function Character() {
  return (
    <section id="characters" className="characters">
      <div className="section-title-wrap">
        <p className="section-mini">CHARACTER</p>
        <h2 className="section-title">キャラクター紹介</h2>
      </div>

      <article className="character-feature">
        <img
          src="/character01.png"
          alt="桜羽 エマ"
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

      <article className="character-feature">
        <img
          src="/character02.png"
          alt="キャラ名"
          className="character-image"
        />

        <div className="character-text">
          <p className="character-label">囚人番号 659</p>
          <h3>二階堂 ヒロ</h3>
          <p className="character-desc">
            読み：ニカイドウ　ヒロ<br />
            桜羽エマ絶対殺すマン。初手で看守に歯向かって斬首され、「ゆっくりヒロ」にされた。<br />
            桜羽エマのことを「バカ犬」呼ばわりしているが、どう考えてもこいつの方がバカである。<br />
            正しくないものを嫌う性格だが、魔女裁判では嘘ばかりついて保身に走るクズ行為が目立つ。当然ながら信頼度は0で、事前投票では絶対に選ばれている。<br />
            「正しい話をしよう。（偽証）」<br />
            固有魔法は「死に戻り」で、死ぬと最後に寝た場所に戻る。<br />
            最近のアップデートで、ベッドを右クリックするだけでリスポーン地点を固定できるようになった。
          </p>
        </div>
      </article>
    </section>
  );
}
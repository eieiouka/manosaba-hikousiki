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
            読み：アクハ　シネ<br />
            桜羽エマ絶対殺すマン。初手で看守に歯向かって斬首され、「ゆっくりヒロ」にされた。<br />
            桜羽エマのことを「バカ犬」呼ばわりしているが、どう考えてもこいつの方がバカである。<br />
            正しくないものを嫌う性格だが、魔女裁判では嘘ばかりついて保身に走るクズ行為が目立つ。当然ながら信頼度は0で、事前投票では絶対に選ばれている。<br />
            「正しい話をしよう。（偽証）」<br />
            固有魔法は「死に戻り」で、死ぬと最後に寝た場所に戻る。<br />
            最近のアップデートで、ベッドを右クリックするだけでリスポーン地点を固定できるようになった。
          </p>
        </div>
      </article>

      <article className="character-feature">
        <img
          src="/character03.png"
          alt="夏目 アンアン"
          className="character-image"
        />

        <div className="character-text">
          <p className="character-label">囚人番号 660</p>
          <h3>夏目 アンアン</h3>
          <p className="character-desc">
            読み：ヒッキー<br />
            バカ。シンプルに頭が悪い。まともに会話すらできない。<br />
            体も弱い。医務室を自分の房だと思っている。<br />
            唯一の取柄である小説もロクに完成させられない。<br />
            肝心の内容もクソつまらない。粗末なものでも完成させて、他人の評価を仰ぐべきだが、こいつにそんな度胸はない。<br />
            ずっと引きこもっていたため、世間知らずで常識知らず。<br />
            殺人事件で皆が敏感になっている中、遊びで狂言自殺をするバカ。なにが「周りの雰囲気を和ませたい」だ。<br />
            佐伯ミリアのクソしょうもない嘘に騙されて、本命（桜羽エマ）を殺し損ねる無能。殺害動機もマジでくだらない。<br />
            魔女裁判になると、急に饒舌になる。だが、社会経験のないヒキニートにロクな語彙力はないため、反論の質もゴミ。<br />
            すべてにおいて、残念な女である。
          </p>
        </div>
      </article>

      <article className="character-feature">
        <img
          src="/character04.png"
          alt="城ケ崎 ノア"
          className="character-image"
        />

        <div className="character-text">
          <p className="character-label">囚人番号 661</p>
          <h3>城ケ崎 ノア</h3>
          <p className="character-desc">
            読み：ダレガケチダ　バカタレ<br />
            所構わず落書きを繰り返す、アウトローな少女。<br />
            表社会では犯人としてバレていない。<br />
            魔法で絵の完成度を上げているが、たまに素の拙い絵が露見する。見たら命を狙われるため、迂闊に近づいてはならない。<br />
            この魔法が原因で牢屋敷送りになり、同室の夏目アンアンを何度も医務室送りにしている。<br />
            日頃から素行が悪く、桜羽エマの手には負えなかった。蓮見レイアの不意討ちに遭い、二階堂ヒロの管理下に置かれる。<br />
            たびたび暴言を吐いては二階堂ヒロを困らせるが、内心では自分を律してくれるヒロに好意を抱いている。<br />
            しかし、夏目アンアンに拙い絵を見られたことで激昂し、彼女を殺害。魔女として処刑され、溺死によって最期を遂げた。
          </p>
        </div>
      </article>
    </section>
  );
}
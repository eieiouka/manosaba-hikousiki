import "./Header.css";

export default function Header() {
  return (
    <header className="topbar">
      <div className="logo-area">
        <div className="logo-main">魔法少女ノ魔女裁判</div>
        <div className="logo-sub">非公式ファンサイト</div>
      </div>

      <nav className="nav">
        <a href="#characters">キャラクター紹介</a>
      </nav>
    </header>
  );
}
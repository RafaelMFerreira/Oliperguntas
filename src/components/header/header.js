import "./header.css";

function Header(props) {
  return (
    <header>
      <img src="logo2.png" alt="Logo" class="logo" />
      <h1 class="title">{props.title}</h1>
      <img src="aneisOlimpiada.png" alt="Olympics Logo" class="olympics-logo" />
    </header>
  );
}

export default Header;

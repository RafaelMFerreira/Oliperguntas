import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <ul>
        <li onClick={() => navigate('/pesquisa')}>
          <i class="fa fa-search"></i>
        </li>
        <li onClick={() => navigate('/perguntas')}>
          <i class="fa fa-comments"></i>
        </li>
        <li onClick={() => navigate('/images')}>
          <i class="fa fa-image"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

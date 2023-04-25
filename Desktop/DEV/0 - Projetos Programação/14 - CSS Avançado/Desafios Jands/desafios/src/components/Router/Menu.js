import { Link } from 'react-router-dom';
import './style.css';
import { MdMenu } from 'react-icons/md';

export default function Menu() {
  return (
    <div className="dropdown">
      <span className="dropbtn menubutton">
        <MdMenu />
      </span>
      <div className="navbar dropdown-content">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MeterConverter">Conversor de Metros²</Link>
          </li>
          <li>
            <Link to="/DaysConverter">Conversor de dias</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

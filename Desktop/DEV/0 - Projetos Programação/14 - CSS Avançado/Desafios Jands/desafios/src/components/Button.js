import { MdAutorenew } from 'react-icons/md';
import './style.css';

export default function Button() {
  return (
    <div className="content">
      <div className="converter">
        <button className="button">
          <span>
            <MdAutorenew />
          </span>
        </button>
      </div>
    </div>
  );
}

import './style.css';
import Menu from './Router/Menu.js';

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="entrances">
        <h1>Home</h1>
        <div className="normalText">
          <p>
            Nesse site você encontrará alguns desafios propostos num grupo de
            tecnologia e programação voltados a aplicação de conceitos
            Javascript. Os desafios tanto são com níveis básicos, como mais
            avançados.
          </p>
          <p>
            A ideia é desenvolver os conceitos em conjunto independente da
            tecnologia usada.
          </p>
        </div>
      </div>
    </div>
  );
}

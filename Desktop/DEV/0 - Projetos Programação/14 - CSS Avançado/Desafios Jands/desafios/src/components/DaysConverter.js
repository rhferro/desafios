import { useState } from 'react';
import './style.css';
import { MdAutorenew } from 'react-icons/md';
import Menu from './Router/Menu.js';

export default function DaysConverter() {
  const [days, setDays] = useState('');
  const [value, setValue] = useState('');

  function converter() {
    let seconds = Number(days) * 86400;
    return setValue(
      <p>
        {days} dia(s) inteiro(s) equivale a {seconds} segundos
      </p>
    );
  }
  return (
    <>
      <Menu />

      <div className="entrances">
        <h1>Dias</h1>
        <div className="normalText">
          Digite uma quantidade qualquer de dias para descobrir o equivalente em
          segundos
        </div>
        <input
          type="number"
          className="values"
          id="mValue"
          placeholder="Digite uma quantidade de dias"
          onChange={(e) => setDays(e.target.value)}
        ></input>
        <div className="content">
          <div className="converter">
            <button className="button" onClick={converter}>
              <span>
                <MdAutorenew />
              </span>
            </button>
          </div>
        </div>
        {value !== '' ? value : <p>Escreva um valor válido</p>}
      </div>
    </>
  );
}

import { useState } from 'react';
import './style.css';
import { MdAutorenew } from 'react-icons/md';
import Menu from './Router/Menu.js';

export default function MeterConverter() {
  const [valueM, setValueM] = useState('');
  const [valueCm, setValueCm] = useState('');
  const [value, setValue] = useState('');

  // let retorno = [];
  function teste() {
    if (valueM === '' && valueCm === '') {
      return setValue(
        <p>Nenhum valor encontrado, digite um valor válido nos campos acima</p>
      );
    } else {
      if (valueM !== '' && valueCm !== '') {
        return setValue(<p>Escolha somente um campo para digitar</p>);
      } else {
        if (valueCm === '') {
          let centimeter = Number(valueM) * 10000;
          setValue(
            <p>
              O valor, após a conversão, ficou:
              <strong> {centimeter}</strong> centímetros².
            </p>
          );
          return console.log('tudo ok');
        } else {
          if (valueM === '') {
            let meter = Number(valueCm) / 1000;
            setValue(
              <p>
                O valor, após a conversão, ficou:
                <strong> {meter}</strong> metros².
              </p>
            );
          }
        }
      }
    }
  }

  return (
    <>
      <Menu />
      <div className="entrances">
        <h1>Metros² para Centímetros² (e vive-versa)</h1>
        <div className="normalText">
          Valor em <strong>m²</strong>
        </div>
        <input
          type="number"
          className="values"
          id="mValue"
          placeholder="Digite um valor em metros quadrados"
          onChange={(e) => setValueM(e.target.value)}
        ></input>
        <div className="content">
          <div className="converter">
            <button onClick={teste} className="button">
              <span>
                <MdAutorenew />
              </span>
            </button>
          </div>
        </div>
        <div className="normalText">
          Valor em <strong>cm²</strong>
        </div>
        <input
          type="number"
          className="values"
          id="cmValue"
          placeholder="Digite um valor em centimetros quadrados"
          v
          onChange={(e) => setValueCm(e.target.value)}
        ></input>
        {value}
      </div>
    </>
  );
}

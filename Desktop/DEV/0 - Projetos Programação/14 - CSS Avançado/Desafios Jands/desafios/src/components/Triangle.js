import triangleIMG from '../images/triangle.png';
import { MdAutorenew } from 'react-icons/md';

import './style.css';
import { useState } from 'react';

export default function Triangle() {
  const [side, setSide] = useState();
  const [value, setValue] = useState();
  console.log(side);
  function calculateTriangle() {
    const triangleValue = (Number(side) ** 2 * Math.sqrt(3)) / 4;
    setValue(
      <p>
        A área do triangulo equilátero é de{' '}
        {triangleValue.toFixed(3).replace('.', ',')} cm
      </p>
    );
    console.log(value);
  }
  return (
    <>
      <div className="entrances">
        <h1>Cálculo da Área de um Triângulo Equilátero(cm)</h1>
        <div className="normalText"> Digite o valor de um dos lados (cm)</div>
        <div className="img">
          <img
            src={triangleIMG}
            alt="Imagem contendo um triângulo equilátero"
          />
        </div>
        <input
          type="number"
          className="values"
          id="mValue"
          placeholder="Digite um valor em metros quadrados"
          onChange={(e) => setSide(e.target.value)}
        ></input>

        <div className="content">
          <div className="converter">
            <button onClick={calculateTriangle} className="button">
              <span>
                <MdAutorenew />
              </span>
            </button>
          </div>
        </div>
        {value}
      </div>
    </>
  );
}

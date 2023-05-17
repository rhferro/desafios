import { useState } from 'react';
import './style.css';
import { MdAutorenew } from 'react-icons/md';

export default function TemperatureConverter() {
  //   const noValue = null;
  const [temperatureValue, setTemperatureValue] = useState();
  const [typeOfTemperature, setTypeOfTemperature] = useState();
  const [text, setText] = useState();
  let tValue = Number(temperatureValue);
  let cValue = '';
  let C = '';
  let fValue = '';
  let F = '';
  let kValue = '';
  let K = '';
  let zeroAbsolute = '';

  function converter() {
    if (typeOfTemperature === 'celsius') {
      C = tValue;
      if (C < -273.15) {
        zeroAbsolute = (
          <p>
            Menor valor aceitável. Segundo a termodinâmica, valores menor que
            -273,15° Celsius ultrapassa o "zero" absoluto.
          </p>
        );
        setText(zeroAbsolute);
      } else {
        kValue = C + 273;
        fValue = (C / 5) * 9 + 32;

        setText(
          <p>
            Convertendo a temperatura de {tValue}° Celsius, obtemos{' '}
            {kValue.toFixed(2).replace('.', ',')} Kelvin e{' '}
            {fValue.toFixed(2).replace('.', ',')}° fahrenheit.
          </p>
        );
      }
    } else if (typeOfTemperature === 'fahrenheit') {
      F = tValue;
      if (F < -459.67) {
        zeroAbsolute = (
          <p>
            Menor valor aceitável. Segundo a termodinâmica, valores menor que
            -459,67° Fahrenheit ultrapassa o "zero" absoluto.
          </p>
        );
        setText(zeroAbsolute);
      } else {
        cValue = (F - 32) / 1.8;
        kValue = (F + 459.67) / 1.8;
        setText(
          <p>
            Convertendo a temperatura de {tValue}° Fahrenheit, obtemos{' '}
            {cValue.toFixed(2).replace('.', ',')}° Celsius e{' '}
            {kValue.toFixed(2).replace('.', ',')} Kelvin.
          </p>
        );
      }
    } else if (typeOfTemperature === 'kelvin') {
      K = tValue;
      if (K < 0) {
        zeroAbsolute = (
          <p>
            Menor valor aceitável. Segundo a termodinâmica, valores menor que 0
            Kelvin ultrapassa o "zero" absoluto.
          </p>
        );
        setText(zeroAbsolute);
      } else {
        cValue = K - 273.15;
        fValue = K * 1.8 - 459.67;

        setText(
          <p>
            Convertendo a temperatura de {tValue} Kelvin, obtemos{' '}
            {cValue.toFixed(2).replace('.', ',')}° Celsius e{' '}
            {fValue.toFixed(2).replace('.', ',')}° Fahrenheit.
          </p>
        );
      }
    }
  }

  return (
    <>
      <div className="entrances">
        <h1>Conversor de temperatura</h1>
        <div className="normalText">
          Digite uma temperatura que você deseje converter. Ela será
          automaticamente convertida para as outras duas temperaturas.
        </div>
        <input
          type="number"
          className="values"
          id="mValue"
          placeholder="Digite a temperatura que deseja converter"
          onChange={(e) => setTemperatureValue(e.target.value)}
        ></input>
        <form className="temperatures">
          <div className="tRadio">
            <input
              type="radio"
              id="celsius"
              name="temperature"
              value="celsius"
              onChange={(e) => setTypeOfTemperature(e.target.value)}
            />
            <label forHTML="calsius">Celsius</label>
          </div>

          <div className="tRadio">
            <input
              type="radio"
              id="fahrenheit"
              name="temperature"
              value="fahrenheit"
              onChange={(e) => setTypeOfTemperature(e.target.value)}
            />
            <label forHTML="fahrenheit">Fahrenheit</label>
          </div>

          <div className="tRadio">
            <input
              type="radio"
              id="kelvin"
              name="temperature"
              value="kelvin"
              onChange={(e) => setTypeOfTemperature(e.target.value)}
            />
            <label forHTML="kelvin">Kelvin </label>
          </div>
        </form>
        <div className="content">
          <div className="converter">
            <button className="button" onClick={converter}>
              <span>
                <MdAutorenew />
              </span>
            </button>
          </div>
        </div>
        {text}
      </div>
    </>
  );
}

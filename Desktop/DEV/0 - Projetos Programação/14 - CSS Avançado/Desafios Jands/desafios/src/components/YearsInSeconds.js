import { useState } from 'react';
import { MdDateRange } from 'react-icons/md';

export default function YearsInSeconds() {
  const [date, setDate] = useState();
  const [value, setValue] = useState();

  function calcYearsInSeconds() {
    const dayInMiliseconds = 1000 * 60 * 60 * 24;
    const currentDay = new Date();
    const bornDay = new Date(date).getTime();
    const calc = currentDay - bornDay;
    const yearsLived = Math.floor(calc / (dayInMiliseconds * 365.25));
    const daysLived = Math.floor(calc / dayInMiliseconds);
    const secondsLived = daysLived * 86400;
    setValue(
      <>
        <p>Você tem {yearsLived} anos</p>
        <p>Viveu cerca de {daysLived} dias até hoje</p>
        <p>E a quantidade de segundos vividos foi de {secondsLived}</p>
      </>
    );
  }
  console.log(calcYearsInSeconds);
  return (
    <>
      <div className="entrances">
        <h1>Cálculo de quanto tempo você já viveu</h1>
        <div className="normalText"> Coloque o ano que você nasceu</div>
        <div className="dateDiv">
          <input
            className="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <div className="content">
            <div className="converter">
              <button onClick={calcYearsInSeconds} className="button">
                <span>
                  <MdDateRange />
                </span>
              </button>
            </div>
          </div>
        </div>
        {value}
      </div>
    </>
  );
}

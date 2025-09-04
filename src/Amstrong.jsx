import React, { useState } from "react";

function Armstrong() {
  const [num, setNum] = useState("");
  const [disp, setDisp] = useState("");

  function chk() {
    let a = Number(num);
    let b = a;
    let sum = 0;

    while (a !== 0) {
      let temp = Math.pow(a%10,3);
      sum += temp;
      a = Math.floor(a/10);
    }

    if (b===sum) {
      setDisp("It is an Armstrong number");
    } else {
      setDisp("It is not an Armstrong number");
    }
  }

  return(
    <div className="box">
      <h3>Armstrong Number Check</h3>
      <label htmlFor="nmb">Number: </label>
      <input
        id="nmb"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button className="btn" onClick={chk}>Check</button>
      <h1>{disp}</h1>
    </div>
  );
}

export default Armstrong;

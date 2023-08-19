import React, { useState } from 'react';

function Alpha() {
  const [user, setUser] = useState('');
  const [rezilta, setrezilta] = useState('');

  const change = (rep) => {
    setUser(rep.target.value);
  };

  const convert = () => {
    const lower = user.toLowerCase();
    let rezilta2 = '';

    for (let i = 0; i < lower.length; i++) {
      const char = lower[i];
      if (/^[a-z]$/.test(char)) {
        const position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        rezilta2 += position + ' ';
      }
    }

    if (rezilta2) {
      setrezilta(`rezilta yo se : ${rezilta2}`);
    } else {
      setrezilta('rentre let miniskil selman.');
    }
  };

  return (
    <div>
      <input
        type="text"  placeholder="Entrez un mot"  value={user} onChange={change}
      />
      <button onClick={convert}>konveti</button>
      <label>{rezilta}</label>
    </div>
  );
}

export default Alpha;

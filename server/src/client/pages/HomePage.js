import React from 'react';

const Home = () => {
    return (
    <div>
      <div>I'm the BEST home component</div>
      <button onClick={() => { console.log('you click'); }}>Press me</button>
    </div>
    )
}

export default {component: Home};
import React, { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  const [loadMediaDisabled, setLoadMediaDisabled] = useState(false)
  const onLoadUserMedia = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    console.log(localStream)
    setLoadMediaDisabled(false)
  }
  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '25px'}}>
        <div>
          <h2>Me</h2>
          <div style={{ width: '500px', height: '500px', backgroundColor: 'lightgray', marginBottom: '30px' }} >
            {loadMediaDisabled && <ReactPlayer height='100%' width='100%' url='https://www.youtube.com/watch?v=QsH8FL0952k' />}
          </div>
        </div>
        <div>
          <h2>Remote peer</h2>
          <div style={{ width: '500px', height: '500px', backgroundColor: 'lightgray', marginBottom: '30px' }} >
            {loadMediaDisabled && <ReactPlayer height='100%' width='100%' url='https://www.youtube.com/watch?v=QsH8FL0952k' />}
          </div>
        </div>
      </div>
      <button disabled={loadMediaDisabled} onClick={onLoadUserMedia}>Load Media</button>
    </div>
  );
}

export default App;

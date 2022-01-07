import React, { createRef, useState } from 'react';
import './App.css';
import { VncScreen } from './lib';
import { RFBHandler } from './lib/VncScreen';

function App() {
  const [vncUrl, setVncUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const ref = createRef<RFBHandler>();

  const onButtonClick = ()=> {
    ref.current!.sendKey(0xffe3, "ControlLeft", true);
    ref.current!.sendKey(0xffe9, "AltLeft", true);
    ref.current!.sendKey(0xffff, "Delete", true);
    ref.current!.sendKey(0xffe3, "ControlLeft", false);
    ref.current!.sendKey(0xffe9, "AltLeft", false);
    ref.current!.sendKey(0xffff, "Delete", false);
  }

  const isValid = (vncUrl: string) => {
    if (!vncUrl.startsWith('ws://') && !vncUrl.startsWith('wss://')) {
      return false;
    }

    return true;
  };

  const Spacer = () => <div style={{ width: '2rem', display: 'inline-block' }} />;

  return (
    <>
      <div style={{ margin: '1rem' }}>
        <label htmlFor="url">URL for VNC Stream</label>
        <Spacer />

        <input type="text" onChange={({ target: { value } }) => {
          setInputUrl(value);
        }} name="url" placeholder="wss://your-vnc-url" />

        <Spacer />
        <button onClick={() => setVncUrl(inputUrl)}>Go!</button>
      </div>

      <div style={{ opacity: 0.5, margin: '1rem' }}>
        Since the site is loaded over HTTPS, only `wss://` URLs (SSL encrypted websockets URLs) are supported.
        <br />
        To test a `ws://` URL, clone the application and run it on http://localhost:3000, or <a href="https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en#task_5448763B8DC941FD80F84041AEF0A14D">enable Mixed Content on your browser</a>.
      </div>

      <div style={{ margin: '1rem' }}>
        {
          isValid(vncUrl)
            ?
            (
              <VncScreen
                url={vncUrl}
                scaleViewport
                background="#000000"
                style={{
                  width: '75vw',
                  height: '75vh',
                }}
                ref={ref}
                debug
              />
            )
            : <div>VNC URL not provided.</div>
        }
      <div>
        <button onClick={onButtonClick}>ctrl+alt+del</button>
      </div>
      </div>
    </>
  );
}

export default App;

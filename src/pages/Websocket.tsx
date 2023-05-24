import React, { useEffect } from 'react';

function WebSocket() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../server.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default WebSocket;

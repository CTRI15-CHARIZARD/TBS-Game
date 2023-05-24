import React, { useEffect, useState } from 'react';

const WebSocketPage: React.FC = () => {
  const [roomId, setRoomId] = useState<string>('');

  useEffect(() => {
    console.log('roomId: ', roomId);
  }, [roomId]);

  return (
    <>
      <div className="flex h-96 min-h-screen flex-col bg-gradient-to-b from-pokemonBlueLighter to-pokemonBlueLighter">
        <div className="mb-auto mt-20" style={{ marginTop: '200px' }}>
          hello
        </div>
      </div>
    </>
  );
};

export default WebSocketPage;

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import welcomePokemon from '../../images/welcomePokemon.png';
import pokemonList from '../../images/pokemonList.png';
import pokemonBattle from '../../images/pokemonBattle.png';
import pokemonHandDrawn from '../../images/handDrawnPokemon.png';

const Home: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [socketId, setSocketId] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3000'); // Replace with your server URL

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      setSocketId(socket.id); // Set the socket ID when connected
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('roomId', (roomId: any) => {
      console.log('In socket.on, received roomId:', roomId);
      // Update your UI with the received roomId
    });

    // Emit the roomId to the server
    const roomId = 'Your Room ID'; // Replace with the actual roomId
    socket.emit('roomId', roomId);

    return () => {
      socket.disconnect(); // Disconnect the WebSocket when component unmounts
    };
  }, []);

  const handleClick = (): void => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-pokemonBlueLighter to-pokemonBlueLighter">
        <div className="mb-auto mt-16 flex flex-col items-center bg-gradient-to-b from-pokemonBlueDarker to-pokemonBlueLighter">
          <img src={welcomePokemon} alt="Welcome to the Wonderful World of Pokémon!" className="mt-8" />
          <div className="mt-10 flex flex-nowrap justify-evenly">
            <div className="w-full pr-20">
              <div className="mb-4 flex justify-center font-fuzzyBubbles text-3xl text-pokemonYellow">
                Choose from your favorites...
              </div>
              <div className="relative max-w-md overflow-hidden rounded-lg shadow-lg">
                <img src={pokemonList} alt="Chart of Pokémon" className="h-auto w-full" />
                <div className="absolute inset-0 rounded-lg border-2 border-pokemonPurple"></div>
              </div>
            </div>
            <div className="w-full pr-20">
              <div className="mb-4 flex justify-center font-fuzzyBubbles text-3xl text-pokemonYellow">
                ...and battle your friends!
              </div>
              <div className="relative max-w-md overflow-hidden rounded-lg shadow-lg">
                <img src={pokemonBattle} alt="Pokémon Battle" className="h-auto w-full" />
                <div className="absolute inset-0 rounded-lg border-2 border-pokemonPurple"></div>
              </div>
              <div className="mt-10 flex justify-center font-fuzzyBubbles text-2xl text-pokemonPurple">
                So what are you waiting for? {socketId}
              </div>
              <div className="mt-6 flex justify-center ">
                <NavLink
                  to="/battle"
                  className={`flex max-w-4xl transform items-center rounded-md border-8 border-pokemonRed bg-pokemonRed px-6 py-3 font-fuzzyBubbles text-xl drop-shadow-xl transition hover:text-white hover:shadow-xl
                  ${isClicked ? 'translate-y-1' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                  }}
                >
                  Lets Battle!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

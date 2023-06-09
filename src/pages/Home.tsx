import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import welcomePokemon from '../../images/welcomePokemon.png';
import pokemonList from '../../images/pokemonList.png';
import pokemonBattle from '../../images/pokemonBattle.png';
import pokemonHandDrawn from '../../images/handDrawnPokemon.png';

export default function Home() {

    return (
        <>
            <div className="flex flex-col items-center h-screen bg-gradient-to-b from-pokemonBlueDarker to-pokemonBlueLighter">
                <img src={welcomePokemon} alt="Welcome to the Wonderful World of Pokémon!" className="mt-8"/>
                <div className="flex flex-nowrap justify-evenly mt-10">
                    <div className="w-full pr-20">
                        <div className="flex justify-center mb-4 text-3xl text-pokemonYellow font-fuzzyBubbles">Choose from your favorites...</div>
                            <div className="max-w-md shadow-lg rounded-lg overflow-hidden relative">
                            <img src={pokemonList} alt="Chart of Pokémon" className="w-full h-auto" />
                        <div className="absolute inset-0 border-2 border-pokemonPurple rounded-lg"></div>
                        </div>
                    </div>
                    <div className="w-full pr-20">
                        <div className="flex justify-center mb-4 text-3xl text-pokemonYellow font-fuzzyBubbles">...and battle your friends!</div>
                            <div className="max-w-md shadow-lg rounded-lg overflow-hidden relative">
                            <img src={pokemonBattle} alt="Pokémon Battle" className="w-full h-auto" />
                        <div className="absolute inset-0 border-2 border-pokemonPurple rounded-lg"></div>
                        </div>
                        <div className="flex justify-center mt-10 text-2xl text-pokemonPurple font-fuzzyBubbles">
                            So what are you waiting for?
                        </div>
                        <div className="flex justify-center mt-6 ">
                            <button className="flex items-center font-fuzzyBubbles border-8 rounded-md border-pokemonRed bg-pokemonRed max-w-4xl px-6 py-3 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-200">
                                Lets Battle!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};
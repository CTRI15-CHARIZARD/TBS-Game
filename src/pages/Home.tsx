import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import welcomePokemon from '../../images/welcomePokemon.png';
import pokemonList from '../../images/pokemonList.png';
import pokemonBattle from '../../images/pokemonBattle.png';
// import pokemonHandDrawn from '../../images/handDrawnPokemon.png';

const Home: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (): void => {
      setIsClicked(true);
      setTimeout(() => {setIsClicked(false)}, 100);
    };

    return (
        <>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-pokemonBlueDarker via-pokemonBlueLighter to-pokemonBlueLighter">
            <div className="flex flex-col items-center bg-gradient-to-b from-pokemonBlueDarker to-pokemonBlueLighter mb-auto mt-16">
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
                            <NavLink
                                to="/select"
                                className={`flex items-center font-fuzzyBubbles hover:text-white border-8 rounded-md border-pokemonRed bg-pokemonRed max-w-4xl px-6 py-3 text-xl drop-shadow-xl hover:shadow-xl transform transition
                                    ${isClicked ? 'translate-y-1' : ''}`}
                                onClick={handleClick}
                            >
                                Lets Battle!
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default Home;
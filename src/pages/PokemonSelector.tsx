import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../store/pokemonContext';
import Bulbasaur from '../../images/bulbasaur.png';
import Charmander from '../../images/charmander.png';
import Squirtle from '../../images/squirtle.png';
import Pikachu from '../../images/pikachu.png';
import Jigglypuff from '../../images/jigglypuff.png';

const SelectPokemon: React.FC = () => {
    const { pokemon, setPokemon } = useContext(PokemonContext)
    const navigate = useNavigate()

    const handleClick = (value: string): void => {
        setPokemon(value);
        console.log('pokemon: ', pokemon, 'value: ', value)
        navigate('/battle');
      };

    return (
        <>
            <div className="bg-gradient-to-b from-pokemonBlueDarker via-pokemonBlueLighter to-pokemonBlueLighter">
                <br></br>
                <br></br>
                <div className="flex justify-center mt-10 text-4xl text-white font-fuzzyBubbles mt-24">
                    Select your Pokemon!
                </div>
                <div id="pokemonChoices" className='flex flex-wrap justify-around items-center pt-24 pb-24'>
                    <div className="flex flex-col justify-center">
                        <div>
                            <img src={Bulbasaur} alt="Bulbasaur picture" className="max-w-xs rounded-full" />
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="flex justify-center text-3xl font-fuzzyBubbles">
                            Bulbasaur
                        </div>
                        <br></br>
                        <div className="flex justify-center bg-gradient-to-r from-grass to-poison w-28 mx-auto rounded">
                            Grass / Poison
                        </div>
                        <br></br>
                        <button 
                            className="flex items-center justify-center font-fuzzyBubbles hover:text-white border-4 rounded-md border-pokemonRed bg-pokemonRed w-28 mx-auto text-xl drop-shadow-xl hover:shadow-xl transform transition"
                            value='Bulbasaur'
                            onClick={(event) => {
                                handleClick(event.currentTarget.value);
                                }
                            }
                        >
                            Select
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <img src={Charmander} alt="Charmander picture" className="max-w-xs rounded-full" />
                        </div>
                        <br></br>
                        <div className="flex justify-center text-3xl font-fuzzyBubbles">
                            Charmander
                        </div>
                        <br></br>
                        <div className="flex justify-center bg-fire w-28 mx-auto rounded">
                            Fire
                        </div>
                        <br></br>
                        <button 
                            className="flex items-center justify-center font-fuzzyBubbles hover:text-white border-4 rounded-md border-pokemonRed bg-pokemonRed w-28 mx-auto text-xl drop-shadow-xl hover:shadow-xl transform transition"
                            value="Charmander"
                            onClick={(event) => {
                                handleClick(event.currentTarget.value);
                                }
                            }
                        >
                            Select
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <img src={Squirtle} alt="Squirtle picture" className="max-w-xs rounded-full" />
                        </div>
                        <br></br>
                        <div className="flex justify-center text-3xl font-fuzzyBubbles">
                            Squirtle
                        </div>
                        <br></br>
                        <div className="flex justify-center bg-water w-28 mx-auto rounded">
                            Water
                        </div>
                        <br></br>
                        <button 
                            className="flex items-center justify-center font-fuzzyBubbles hover:text-white border-4 rounded-md border-pokemonRed bg-pokemonRed w-28 mx-auto text-xl drop-shadow-xl hover:shadow-xl transform transition"
                            value='Squirtle'
                            onClick={(event) => {
                                handleClick(event.currentTarget.value);
                                }
                            }
                        >
                            Select
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <img src={Pikachu} alt="Pikachu picture" className="max-w-xs rounded-full" />
                        </div>
                        <br></br>
                        <div className="flex justify-center text-3xl font-fuzzyBubbles">
                            Pikachu
                        </div>
                        <br></br>
                        <div className="flex justify-center bg-electric w-28 mx-auto rounded">
                            Electric
                        </div>
                        <br></br>
                        <button 
                            className="flex items-center justify-center font-fuzzyBubbles hover:text-white border-4 rounded-md border-pokemonRed bg-pokemonRed w-28 mx-auto text-xl drop-shadow-xl hover:shadow-xl transform transition"
                            value='Pikachu'
                            onClick={(event) => {
                                handleClick(event.currentTarget.value);
                                }
                            }
                        >
                            Select
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <img src={Jigglypuff} alt="Jigglypuff picture" className="max-w-xs rounded-full" />
                        </div>
                        <br></br>
                        <div className="flex justify-center text-3xl font-fuzzyBubbles">
                            Jigglypuff
                        </div>
                        <br></br>
                        <div className="flex justify-center bg-gradient-to-r from-normal via-fairyLight to-fairy w-28 mx-auto rounded">
                            Normal / Fairy
                        </div>
                        <br></br>
                        <button 
                            className="flex items-center justify-center font-fuzzyBubbles hover:text-white border-4 rounded-md border-pokemonRed bg-pokemonRed w-28 mx-auto text-xl drop-shadow-xl hover:shadow-xl transform transition"
                            value='Jigglypuff'
                            onClick={(event) => {
                                handleClick(event.currentTarget.value);
                                }
                            }
                        >
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SelectPokemon;
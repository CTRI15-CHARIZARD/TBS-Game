import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Bulbasaur from '../../images/bulbasaur.png';
import Charmander from '../../images/charmander.png';
import Squirtle from '../../images/squirtle.png';
import Pikachu from '../../images/pikachu.png';
import Jigglypuff from '../../images/jigglypuff.png';



const SelectPokemon: React.FC = () => {

    // const pokemonChoices: string[] = ['Bulbasaur', 'Charmander', 'Squritle', 'Pikachu', 'Jigglypuff']
    // const choices = document.querySelector('#pokemonChoices')

    // for (const el of pokemonChoices) {
    //     <div className="flex flex-col justify-center">{el}</div>
    // }
    const [pokemon, setPokemon] = useState('');
    const navigate = useNavigate()

    const handleClick = async () => {
        //setPokemon()
        await Promise.resolve(console.log('pokemon in the handleClick: ', pokemon))
        navigate('/battle');
        setPokemon('');
      };

      useEffect(() => {
        console.log('pokemon choice:', pokemon);
      }, [pokemon]);

    return (
        <>
        <div className="min-h-screen bg-gradient-to-b from-pokemonBlueDarker via-pokemonBlueLighter to-pokemonBlueLighter">
        <br></br>
        <br></br>
        <div className="flex justify-center mt-10 text-4xl text-white font-fuzzyBubbles mt-24">
                            Select your Pokemon!
                        </div>
            <div id="pokemonChoices" className='flex flex-row justify-around items-center pt-24 pb-24'>
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
                            onClick={ async () => {
                                await Promise.resolve(setPokemon('bulbasaur'));
                                console.log('What is up?')

                                handleClick();
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
                            value="charmander"
                            onClick={() => {
                                setPokemon('charmander')
                                handleClick();
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
                            onClick={() => {
                                setPokemon('squirtle');
                                handleClick();
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
                            onClick={() => {
                                setPokemon('pikachu');
                                handleClick();
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
                            onClick={() => {
                                setPokemon('jigglypuff');
                                handleClick();
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
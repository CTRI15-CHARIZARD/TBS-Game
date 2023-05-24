import { response } from 'express';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../store/pokemonContext';
import bulbasaurFront from '../../images/bulbasaurFront.png';
import bulbasaurBack from '../../images/bulbasaurBack.png';
import squirtleFront from '../../images/squirtleFront.png';
import squirtleBack from '../../images/squirtleBack.png';
import pikachuFront from '../../images/pikachuFront.png';
import pikachuBack from '../../images/pikachuBack.png';
import jigglypuffFront from '../../images/jigglypuffFront.png';
import jigglypuffBack from '../../images/jigglypuffBack.png';
import charmanderFront from '../../images/charmanderFront.png';
import charmanderBack from '../../images/charmanderBack.png';


export default function Battle() {
    const { pokemon, setPokemon } = useContext(PokemonContext)
    const navigate = useNavigate()
    const options = [bulbasaurFront, squirtleFront, pikachuFront, jigglypuffFront, charmanderFront];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];

    async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        let btn: EventTarget = e.target;
        let text: string = (btn as HTMLElement).textContent!

        let battleInfo: HTMLElement = document.getElementById('battle-info')!
        console.log('pokemon: ', pokemon)

        switch(text) {
            case 'Attack 1': 
                battleInfo.innerHTML = `${text} was used${ pokemon ? ' by ' + pokemon + '!' : '!'}`
                // console.log(`${text} was used`);
                break;
            case 'Attack 2':
                battleInfo.innerHTML = `${text} was used${ pokemon ? ' by ' + pokemon + '!' : '!'}`
                // console.log(`${text} was used`);
                break;
            case 'Attack 3':
                battleInfo.innerHTML = `${text} was used${ pokemon ? ' by ' + pokemon + '!' : '!'}`
                console.log('pokemon: ', pokemon)
                // console.log(`${text} was used`);
                break;
            case 'Run': 
                const randomNum = Math.floor(Math.random() * 10)
                        battleInfo.innerHTML = 'Attempting to escape...'
                if (randomNum <= 3) {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You failed to escape!'
                    }, 2000))
                    setTimeout(() => {
                        battleInfo.innerHTML = '';
                    }, 6000)
                } else if (randomNum > 3) {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You have successfully escaped!';
                    }, 2000))
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = '';
                    }, 4000))
                    setTimeout(() => {
                        setPokemon('');
                            navigate('/select')
                        }, 4000);
                }
                // console.log('You have successfully escaped')
                break;
            default: 
                break;
        }
    }

    // fetch(`/api/move/${pokemon}`)
    //     .then(response => response.json())
    //     .then(data => console.log('data', data))
    //     .catch(error => console.log('error occured while fetching move data', error))

    // This is functionality for decreasing the health bars
    // function progressTest() {
        const health1: HTMLElement = document.getElementById('health-1')!;
        const totalHealth: number = 100//(health1 as HTMLProgressElement).max
        const maxHealth1 = 100//(health1 as HTMLProgressElement).max

        const health2: HTMLElement = document.getElementById('health-2')!;
    //     (health2 as HTMLProgressElement).value -= 10
    // }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-pokemonBlueDarker via-pokemonBlueLighter to-pokemonBlueLighter">
                <div className='flex flex-col items-center bg-gradient-to-b from-pokemonBlueDarker to-pokemonBlueLighter'>
                    <div className='flex justify-center items-center text-3xl text-pokemonYellow font-fuzzyBubbles py-4 mt-20'>
                        Welcome Trainer!
                    </div> 
                    <div id='battle-screen' className='flex justify-evenly content-center border-4 border-black rounded-lg m-auto drop-shadow-xl'>
                        <div className="flex flex-col items-end justify-end jusitfy-self-end h-full">
                            <div className="flex flex-col justify-end mb-6">
                                <div className="flex items-center justify-center mb-10">
                                <img src={pokemon === 'Charmander' ? charmanderBack :
                                    pokemon === 'Bulbasaur' ? bulbasaurBack :
                                    pokemon === 'Squirtle' ? squirtleBack :
                                    pokemon === 'Pikachu' ? pikachuBack : jigglypuffBack
                            } alt="Charmander!" 
                                style={{ transform: 'scale(3)' }}/>
                                </div>
                                <progress
                                    id="health-1"
                                    value="100"
                                    max="100"
                                    className="self-center mb-2"
                                    style={{ width: '200px', 
                                    height: '10px', 
                                    backgroundColor: 'pokemonRed' //maxHealth1 > totalHealth/2 ? '#66923d' : maxHealth1 <= totalHealth/4 ? "red" : "yellow" 
                                }}
                                ></progress>
                            </div>
                        </div>
                        <div id="battle-info" className='flex justify-center items-center mt-2 border-2 border-black rounded-lg' />
                        <div className="flex flex-col items-end justify-start jusitfy-self-end h-full mt-40">
                            <div className="flex flex-col justify-end mb-6">
                                <progress
                                    id="health-2"
                                    value="100"
                                    max="100"
                                    className="self-center"
                                    style={{ width: '200px', height: '10px', backgroundColor: 'green' }}
                                ></progress>
                                <div className="flex items-center justify-center mt-24">
                                    <img src={randomOption} alt="Bulbasaur!"
                                    style={{ transform: 'scale(3)' }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='action-bar' className='grid gap-3 grid-cols-2 grid-rows-2 my-4 mx-auto border-2 border-black rounded-lg'>
                        <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed cursor-pointer drop-shadow-xl hover:shadow-xl" 
                            onClick={handleClick}>
                            Attack 1
                        </button>
                        <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed cursor-pointer drop-shadow-xl hover:shadow-xl" 
                            onClick={handleClick}>
                            Attack 2
                        </button>
                        <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed cursor-pointer drop-shadow-xl hover:shadow-xl" 
                            onClick={handleClick}>
                            Attack 3
                        </button>
                        <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonBlue/75 hover:bg-pokemonBlue cursor-pointer drop-shadow-xl hover:shadow-xl" 
                            onClick={handleClick}>
                            Run
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};


import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../store/pokemonContext'

export default function Battle() {
    const { pokemon, setPokemon } = useContext(PokemonContext)
    const navigate = useNavigate()

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
                    setPokemon('');
                    setTimeout(() => {
                            navigate('/select')
                        }, 4000);
                }
                // console.log('You have successfully escaped')
                break;
            default: 
                break;
        }
    }

    function progressTest() {
        const health1: HTMLElement = document.getElementById('health-1')!;
        (health1 as HTMLProgressElement).value -= 10

        const health2: HTMLElement = document.getElementById('health-2')!;
        (health2 as HTMLProgressElement).value -= 10
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-pokemonBlueDarker via-pokemonBlueLighter to-pokemonBlueLighter">
                <div className='flex flex-col items-center bg-gradient-to-b from-pokemonBlueDarker to-pokemonBlueLighter'>
                    <div className='flex justify-center items-center text-3xl text-pokemonYellow font-fuzzyBubbles py-4 mt-20'>Welcome Trainer!</div> 
                    <div id='battle-screen' className='flex justify-evenly content-center border-4 border-black rounded-lg m-auto drop-shadow-xl'>
                        <progress id='health-1' value='100' max='100' className='justify-self-end self-end mb-6'></progress>
                        <div id="battle-info" className='flex justify-center items-center mt-2 border-2 border-black rounded-lg' />
                        <progress id='health-2' value='100' max='100' className='justify-self-start self-end mb-6'></progress>
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


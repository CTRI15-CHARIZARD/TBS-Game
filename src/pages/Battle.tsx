import React, { useContext, useState, useEffect } from 'react'
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
    const [isClicked, setIsClicked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [opponent, setOpponent] = useState(bulbasaurFront)
    const [yourHealth, setYourHealth] = useState(98);
    const [opponentHealth, setOpponentHealth] = useState(98);

      const handleButtonClick = () => {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 4000);
    };

    useEffect(() => {
        const options = [bulbasaurFront, squirtleFront, pikachuFront, jigglypuffFront, charmanderFront];
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex];
        setOpponent(randomOption);
    }, [])

    
    async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        let btn: EventTarget = e.target;
        let text: string = (btn as HTMLElement).textContent!

        let battleInfo: HTMLElement = document.getElementById('battle-info')!
        console.log('pokemon: ', pokemon)
        setIsClicked(true);
        setTimeout(() => {setIsClicked(false)}, 150);

        const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * rockPaperScissors.length);
        const opponentAttack = rockPaperScissors[randomIndex];

        switch(text) {
            case 'Rock': 
                battleInfo.innerHTML = `${ pokemon ? pokemon : 'Jigglypuff'} used ${text}! Your opponent used ${opponentAttack}!`;
                if (opponentAttack === 'Rock') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You tied!'
                    }, 2000))
                } else if (opponentAttack === 'Paper') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'They hit you!'
                    }, 2000))
                    await Promise.resolve(setTimeout(() => {
                        setYourHealth(yourHealth - 33)
                    }, 4000))

                    if (yourHealth <= 35) {
                        await Promise.resolve(setTimeout(() => {
                            battleInfo.innerHTML = 'Unfortunate! You lost!'
                        }, 5000))
                        setTimeout(() => {
                            setPokemon('');
                            navigate('/select')
                            }, 7000);
                    };
                } else if (opponentAttack === 'Scissors') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You hit them!'
                    }, 2000))
                    await Promise.resolve(setTimeout(() => {
                        setOpponentHealth(opponentHealth - 33)
                    }, 4000))

                    if (opponentHealth <= 35) {
                        await Promise.resolve(setTimeout(() => {
                            battleInfo.innerHTML = 'Congratulations! You win!'
                        }, 5000))
                        setTimeout(() => {
                            setPokemon('');
                            navigate('/select')
                            }, 7000);
                    }
                };
                // console.log(`${text} was used`);
                break;
            case 'Paper':
                battleInfo.innerHTML = `${ pokemon ? pokemon : 'Jigglypuff'} used ${text}! Your opponent used ${opponentAttack}!`
                if (opponentAttack === 'Paper') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You tied!'
                    }, 2000))
                } else if (opponentAttack === 'Scissors') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'They hit you!'
                    }, 2000))
                    await Promise.resolve(setTimeout(() => {
                        setYourHealth(yourHealth - 33)
                    }, 4000))

                    if (yourHealth <= 35) {
                        await Promise.resolve(setTimeout(() => {
                            battleInfo.innerHTML = 'Unfortunate! You lost!'
                        }, 5000))
                        setTimeout(() => {
                            setPokemon('');
                            navigate('/select')
                            }, 7000);
                    };
                } else if (opponentAttack === 'Rock') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You hit them!'
                    }, 2000))
                    await Promise.resolve(setTimeout(() => {
                        setOpponentHealth(opponentHealth - 33)
                    }, 4000))

                    if (opponentHealth <= 35) {
                        await Promise.resolve(setTimeout(() => {
                            battleInfo.innerHTML = 'Congratulations! You win!'
                        }, 5000))
                        setTimeout(() => {
                            setPokemon('');
                            navigate('/select')
                            }, 7000);
                    }
                };
                break;
            case 'Scissors':
                battleInfo.innerHTML = `${ pokemon ? pokemon : 'Jigglypuff'} used ${text}! Your opponent used ${opponentAttack}!`
                if (opponentAttack === 'Scissors') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You tied!'
                    }, 2000))
                } else if (opponentAttack === 'Rock') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'They hit you!'
                    }, 2000))
                    await Promise.resolve(setTimeout(() => {
                        setYourHealth(yourHealth - 33)
                    }, 4000))

                    if (yourHealth <= 35) {
                        await Promise.resolve(setTimeout(() => {
                            battleInfo.innerHTML = 'Unfortunate! You lost!'
                        }, 5000))
                        setTimeout(() => {
                            setPokemon('');
                            navigate('/select')
                            }, 7000);
                    };

                } else if (opponentAttack === 'Paper') {
                    await Promise.resolve(setTimeout(() => {
                        battleInfo.innerHTML = 'You hit them!'
                    }, 2000))
                    await Promise.resolve(setTimeout(() => {
                        setOpponentHealth(opponentHealth - 33)
                    }, 4000))

                    if (opponentHealth <= 35) {
                        await Promise.resolve(setTimeout(() => {
                            battleInfo.innerHTML = 'Congratulations! You win!'
                        }, 5000))
                        setTimeout(() => {
                            setPokemon('');
                            navigate('/select')
                            }, 7000);
                    };
                };
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
                        <div className="flex flex-col items-end justify-end justify-self-end h-full">
                            <div className="flex flex-col justify-end mb-6">
                                <div className={`flex items-center justify-center mb-10 ${isClicked ? 'translate-x-3' : ''}`}>
                                <img src={pokemon === 'Charmander' ? charmanderBack :
                                    pokemon === 'Bulbasaur' ? bulbasaurBack :
                                    pokemon === 'Squirtle' ? squirtleBack :
                                    pokemon === 'Pikachu' ? pikachuBack : jigglypuffBack
                            } alt="Charmander!" 
                                style={{ transform: 'scale(3)' }}/>
                                </div>
                                <progress
                                    id="health-1"
                                    value={yourHealth}
                                    max="99"
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
                                    value={opponentHealth}
                                    max="99"
                                    className="self-center"
                                    style={{ width: '200px', height: '10px', backgroundColor: 'green' }}
                                ></progress>
                                <div className={`flex items-center justify-center mt-24 ${isClicked ? '-translate-x-3' : ''}`}>
                                    <img src={opponent} alt="Bulbasaur!"
                                    style={{ transform: 'scale(3)' }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='action-bar' className='grid gap-3 grid-cols-2 grid-rows-2 my-4 mx-auto border-2 border-black rounded-lg'>
                        <button type='button' className={`action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 cursor-pointer drop-shadow-xl ${ !isButtonDisabled ? 'hover:bg-pokemonRed hover:shadow-xl' : ''}`} 
                            onClick={(event) => {
                                handleClick(event)
                                handleButtonClick();
                            }}
                            disabled={isButtonDisabled}>
                            Rock
                        </button>
                        <button type='button' className={`action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 cursor-pointer drop-shadow-xl ${ !isButtonDisabled ? 'hover:bg-pokemonRed hover:shadow-xl' : ''}`} 
                            onClick={(event) => {
                                handleClick(event)
                                handleButtonClick();
                            }}
                            disabled={isButtonDisabled}>
                            Paper
                        </button>
                        <button type='button' className={`action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 cursor-pointer drop-shadow-xl ${ !isButtonDisabled ? 'hover:bg-pokemonRed hover:shadow-xl' : ''}`}
                            onClick={(event) => {
                                handleClick(event)
                                handleButtonClick();
                            }}
                            disabled={isButtonDisabled}>
                            Scissors
                        </button>
                        <button type='button' className={`action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonBlue/75 cursor-pointer drop-shadow-xl ${ !isButtonDisabled ? 'hover:bg-pokemonBlue hover:shadow-xl' : ''}`}
                            onClick={(event) => {
                                handleClick(event)
                                handleButtonClick();
                            }}
                            disabled={isButtonDisabled}>
                            Run
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};


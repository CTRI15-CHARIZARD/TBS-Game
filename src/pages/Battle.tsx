import React from 'react'

export default function Battle() {

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        let btn: EventTarget = e.target;
        let text: string = (btn as HTMLElement).textContent!

        let battleInfo: HTMLElement = document.getElementById('battle-info')!

        switch(text) {
            case 'Attack 1': 
                battleInfo.innerHTML = `${text} was used`
                // console.log(`${text} was used`);
                break;
            case 'Attack 2':
                battleInfo.innerHTML = `${text} was used`
                // console.log(`${text} was used`);
                break;
            case 'Attack 3':
                battleInfo.innerHTML = `${text} was used`
                // console.log(`${text} was used`);
                break;
            case 'Run': 
                const randomNum = Math.floor(Math.random() * 10)
                if (randomNum <= 3) battleInfo.innerHTML = 'You failed to escape!'
                else if (randomNum > 3) battleInfo.innerHTML = 'You have successfully escaped!'
                // console.log('You have successfully escaped')
                break;
            default: 
                break;
        }
    }

    return (
        <div className='h-screen w-screen bg-gradient-to-b from-pokemonBlueDarker to-pokemonBlueLighter'>
           <div className='flex justify-center items-center text-3xl text-pokemonYellow font-fuzzyBubbles py-4 mt-20'>Welcome Trainer!</div> 
           <div id='battle-screen' className='flex justify-center content-center border-4 border-black rounded-lg m-auto drop-shadow-xl'>
            <div id="battle-info" className='flex justify-center items-center mt-2 border-2 border-black rounded-lg'></div>
           </div>
           <div id='action-bar' className='grid gap-3 grid-cols-2 grid-rows-2 my-4 mx-auto border-2 border-black rounded-lg'>
            <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed cursor-pointer drop-shadow-xl hover:shadow-xl" onClick={handleClick}>Attack 1</button>
            <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed cursor-pointer drop-shadow-xl hover:shadow-xl" onClick={handleClick}>Attack 2</button>
            <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed cursor-pointer drop-shadow-xl hover:shadow-xl" onClick={handleClick}>Attack 3</button>
            <button type='button' className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonBlue/75 hover:bg-pokemonBlue cursor-pointer drop-shadow-xl hover:shadow-xl" onClick={handleClick}>Run</button>
           </div>
        </div>
    )
}
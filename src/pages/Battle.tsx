import React from 'react'

export default function Battle() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-pokemonBlueDarker via-pokemonBlueLighter to-pokemonBlueLighter">
                <div className='flex flex-col items-center bg-gradient-to-b from-pokemonBlueDarker to-pokemonBlueLighter'>
                    <div className='flex justify-center items-center text-3xl text-pokemonYellow font-fuzzyBubbles py-4 mt-24'>Welcome Trainer!</div> 
                    <div id='battle-screen' className='border-4 border-black rounded-lg m-auto' />
                    <div id='action-bar' className='grid gap-3 grid-cols-2 grid-rows-2 my-4 mx-auto border-2 border-black rounded-lg'>
                        <div className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed">Attack 1</div>
                        <div className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed">Attack 2</div>
                        <div className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonRed/75 hover:bg-pokemonRed">Attack 3</div>
                        <div className="action-btn border-2 border-black m-auto py-2 px-8 rounded-lg bg-pokemonBlue/75 hover:bg-pokemonBlue">Run</div>
                    </div>
                </div>
            </div>
        </>
    )
}
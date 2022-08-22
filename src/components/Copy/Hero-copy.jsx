import React from 'react';
import tedxImg from './x-art.svg';

const Hero = () => {
    return(
        <main >
            <div className='flex h-full'>
            <div className='skew-x-12 w-2/5 flex justify-start'>
                <img src={tedxImg} alt="tedx-logo" />
            </div>
            <div className='text-white w-3/5 flex flex-col justify-center'>
                <header>
                <div className="text-red-600 font-bold text-8xl mt-14 mx-24">Hey Folks!!!,</div>
                <div className='font-bold text-4xl my-8 mx-24'>TEDx is now in SRMIST.</div>
                </header>
                <section className='my-6'>
                <div className="text-lg mx-24 my-8 w-11/12">
                    A TED<sup>x</sup> event is a local gathering where live TED-like talks and performances are shared with the community. 
                    <br/>
                    TED<sup>x</sup> events are fully planned and coordinated independently, on a community-by-community basis. 
                    <br/>
                    The content and design of each TED<sup>x</sup> event is unique and developed independently, but all of them have features in common.
                </div>
                <div className="text-md mx-24 my-5 w-11/12">
                    <div className="font-bold text-xl">TED's format</div>
                    A suite of short, carefully prepared talks, demonstrations and performances that are idea-focused, and cover a wide range of subjects to foster learning, inspiration and wonder – and provoke conversations that matter.
                </div>
                <div className="text-md mx-24 my-5 w-11/12">
                    <div className="font-bold text-xl">Diversity of topics</div>
                    All TEDx events present multiple issues and a diversity of voices from many disciplines. After all, what’s the fun without a little variety?
                </div>
                <div className="text-md mx-24 my-5 w-11/12">
                    <div className="font-bold text-xl">Community-driven and bias-free content</div>
                    A TEDx event is organized by volunteers from the local community, and just like TED events, it lacks any commercial, religious or political agenda. 
                    <br/>
                    Its goal is to spark conversation, connection and community.
                </div>
                </section>
            </div>
            </div>
      </main>
    );
}

export default Hero;
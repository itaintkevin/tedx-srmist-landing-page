import React from 'react';
import tedxImg from './images/x-art.svg';

const Hero = () => {
    return(
        <main >
            <div className="flex flex-col lg:flex-row bg-cover bg-[url('/home/kev/Documents/Coding/Live-Projects/tedx-website/src/background.svg')] w-full h-full">
                <div className='flex items-center justify-center lg:w-2/5 w-full my-16'>
                    <img src={tedxImg} alt="tedx-logo" />
                </div>
                <div className='flex flex-col flex-wrap lg:items-start items-center justify-center text-white lg:w-3/5 w-full'>
                    <header>
                    <div className="text-red-600 font-bold text-7xl lg:text-8xl mx-5 lg:my-10 my-2">Hey Folks!!!,</div>
                    <div className='font-bold text-4xl mx-5 my-5'>TEDx is now in SRMIST.</div>
                    </header>
                    <section className='my-6 sm:text-2xl lg:text-xl w-full'>
                        <div className="mx-6 sm:mx-10 sm:my-10 text-md lg:w-11/12">
                            <div className="my-2">A TED<sup>x</sup> event is a local gathering where live TED-like talks and performances are shared with the community.</div> 
                            <div className="my-2">TED<sup>x</sup> events are fully planned and coordinated independently, on a community-by-community basis.</div> 
                            <div className="my-2">The content and design of each TED<sup>x</sup> event is unique and developed independently, but all of them have features in common.</div>
                        </div>
                        <div className="mx-5 sm:mx-10 my-6 text-md lg:w-11/12">
                            <div className="my-2 font-bold sm:text-3xl lg:text-2xl text-xl">TED's format</div>
                            A suite of short, carefully prepared talks, demonstrations and performances that are idea-focused, and cover a wide range of subjects to foster learning, inspiration and wonder – and provoke conversations that matter.
                        </div>
                        <div className="mx-5 sm:mx-10 my-6 text-md lg:w-11/12">
                            <div className="my-2 font-bold sm:text-3xl lg:text-2xl text-xl">Diversity of topics</div>
                            All TEDx events present multiple issues and a diversity of voices from many disciplines. After all, what’s the fun without a little variety?
                        </div>
                        <div className="mx-5 sm:mx-10 my-6 text-md lg:w-11/12">
                            <div className="my-2 font-bold sm:text-3xl lg:text-2xl text-xl">Community-driven and bias-free content</div>
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
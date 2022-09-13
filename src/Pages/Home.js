import React from 'react';
import bgImage from '../images/home-bg.jpg';
import { Technologies } from '../Components/Technologies';
import OurTeam from './OurTeam';
const Home = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bgImage}) center/cover`,
          height: '50vh',
          width: '100vw',
          objectFit: 'cover',
        }}
      >
        <h1>title</h1>
      </div>
      <div className="text-center ">
        <h1 className="text-4xl font-bold uppercase h-30 mt-16">
          Technologies
        </h1>

        <div className="grid grid-cols-4 gap-4 border-black mt-8 ">
          {Technologies.map((tech) => {
            return (
              <div className="h-60 w-70 m-4 border-red-500 rounded-xl border-gray-500 shadow-lg">
                <h3 className="uppercase text-2xl">{tech.name}</h3>
                <img src= {bgImage} alt=""/>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <OurTeam />
    </div>
  );
};

export default Home;

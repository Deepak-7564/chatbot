import React from 'react';
import img from '../images/a.jpeg';
const teamImages = [img, img, img, img, img, img, img];
function OurTeam() {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={img} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>

    // <div>
    //   {teamImages.map((img) => {
    //     return <img src={img} />;
    //   })}
    // </div>
  );
}

export default OurTeam;

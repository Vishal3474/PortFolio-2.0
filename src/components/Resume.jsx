import React from 'react';



const Resume = () => {
  return (
    <div name='Resume' className='w-full my-32'  >
     <h1 class="text-indigo-500 text-4xl font-bold text-center mb-6"  >Resume</h1>
     
    <div class=" border border-2 border-indigo-400 mr-20 ml-20 ">
    <img  src="https://cdn.discordapp.com/attachments/944189291427430421/979783635404206112/Vishal_InternshalaResume_2_page-0001.jpg"></img>
     </div>
    <div className='items-center text-center'>
    <button className='p-2 mb-4 mt-2 mb-2 text-center'><a href="https://drive.google.com/file/d/1fvADDl6MmPLGAKhw2lMH4eKE7DGqFSkC/view?usp=sharing">Download Resume</a></button>
    </div>
    
    </div>
  );
};

export default Resume;

import React from 'react';



const Pricing = () => {
  return (
    <div name='pricing' className='w-full my-32'  >
     <h1 class="text-indigo-500 text-4xl font-bold text-center"  >Resume</h1>
    <div class=" border border-1 border-black ">
    <img  src="https://cdn.discordapp.com/attachments/944189291427430421/964783609896632320/demoResume.jpg"></img>
     </div>
    
    <div className='items-center text-center'>
    <button className='p-2 mb-4 mt-2 mb-2 text-center'><a href="https://drive.google.com/u/0/uc?id=1l0lB9co1om5PGKu0qMBQfFENA9l1Drtm&export=download">Download Resume</a></button>
    </div>
    
    </div>
  );
};

export default Pricing;

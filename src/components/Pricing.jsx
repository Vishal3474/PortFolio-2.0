import React from 'react';



const Pricing = () => {
  return (
    <div name='pricing' className='w-full my-32'  >
     <h1 class="text-indigo-500 text-4xl font-bold text-center"  >Resume</h1>
    <div class=" border border-1 border-black ">
    <img  src="https://cdn.discordapp.com/attachments/944189291427430421/979619964443066388/Web_developer_Resume.jpg"></img>
     </div>
    
    <div className='items-center text-center'>
    <button className='p-2 mb-4 mt-2 mb-2 text-center'><a href="https://drive.google.com/file/d/1-Ems5JioDmkpgfgVomtU1KAVtjJnizWY/view?usp=sharing">Download Resume</a></button>
    </div>
    
    </div>
  );
};

export default Pricing;

import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const Projects = () => {
  return (
    <div name='Projects' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center text-indigo-600'>My Recent Works</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Here are a few projects I've worked on recently.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Ask CodeYogi</h3>
              <p className='text-lg pt-2 pb-4'>
               This is same like as Ask Jud Clone, Do you need to ask a question? Are you looking for answers? Jud offers you a space to ask anything you want.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Unit Converter</h3>
              <p className='text-lg pt-2 pb-4'>
               Unit of Conversion is a multi-step process involving multiplication or division by a Measurment Units Conveter, can all be measured in various ways.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
  <a href="#">
    <img class="rounded-t-lg" src="https://cdn.discordapp.com/attachments/944189291427430421/979790050948681788/1.jpg" alt="" />
  </a>
  <div class="p-5">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Todo-App</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a simple Todo app! Learned about useState and useDispatch to add a task, mark it as complete , mark it as Incomplete and Show Number Of Todo Task</p>
    <a href="https://todo-vishal.netlify.app/" class="inline-flex items-center rounded-lg bg-indigo-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> View Project </a>
  </div>
</div>

           

        </div>
      </div>
    </div>
  );
};

export default Projects;

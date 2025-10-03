import React from 'react'
import axiosClient from '../../utils/axios'
import { useNavigate } from 'react-router-dom'

const Logout = ({setLogout}) => {
 
    const navigate = useNavigate()
    function handleLogout(){
        axiosClient
        .post('/auth/logout')
        .then(res => {
            navigate('/')
        })
    }

  return (
    <div className='absolute p-6 h-full w-full flex items-center justify-center bg-gray-400/5 dark:bg-zinc-800/15 backdrop-blur-md' >
        <main className='space-y-6 w-full min-w-[300px] max-w-[390px]  p-6  bg-white shadow dark:bg-zinc-900 '>
            <p className='font-semibold text-lg text-primary dark:text-secondary'>Confirm Logout ?</p>
            <div className='flex w-full justify-between items-center '>
                <button 
                onClick={()=>{setLogout(false)}}
                className='px-4 py-1 cursor-pointer bg-gray-200 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-secondary/10 hover:text-primary dark:hover:text-secondary/70'>Cancel</button>
              
                <button
                onClick={handleLogout}
                className='px-4 py-1 cursor-pointer bg-gray-200 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-secondary/10 hover:text-primary dark:hover:text-secondary/70'>Logout</button>
            </div>
        </main>
    </div>
  )
}

export default Logout
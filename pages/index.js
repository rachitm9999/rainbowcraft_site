import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Link from 'next/link'

// import {thumb1} from './public/craft1.jpg'


export default function Home() {

  return (
    <div >
      <Head>
        <title>Rainbow Craft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://images.unsplash.com/photo-1545231097-c046d9dcc2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80" />
      </Head>
      <header>
         
         <h1 className='  absolute top-40 text-5xl left-20 -translate-x--1/2 -translate-y-1/2 sm:left-40 md:left-60 lg:left-80 xl:left-1/3'>🌈<u>Rainbow Craft</u></h1>
         <img className=' h-96 w-screen cursor-pointer ' loading='lazy' src='https://images.unsplash.com/photo-1545231097-c046d9dcc2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80' alt='background'></img>
         
        
        
         </header>
         {/* <ImgCard link ='https://www.youtube.com/watch?v=i4MDCciXoi4' thumb='https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg'/>
         <ImgCard link ='https://www.youtube.com/watch?v=i4MDCciXoi4' thumb='https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg'/>
         <ImgCard link ='https://www.youtube.com/watch?v=i4MDCciXoi4' thumb='https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg'/> */}
         

         {/* <div className='flex-row justify-between '>
      <ImgCard link ='https://www.youtube.com/watch?v=i4MDCciXoi4' thumb='https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg'/>
      {/* <div className='third_card'>      */}
      {/* <ImgCard link ='https://www.youtube.com/watch?v=0fRMEOoB5N8' thumb='https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg'/>
      <ImgCard  link ='https://www.youtube.com/watch?v=ql-R8jJ6a5I' thumb='https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg'/> */}
      {/* </div> 
      </div>*/}
      <div className=' bg-red-500 p-20 grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-3'>
      
        <Link  href='https://www.youtube.com/watch?v=1L0HgVvj244' >
        <a  target="_blank"><img  className='hover:ring-gray-800 hover:ring-4'loading='lazy' src='https://img.youtube.com/vi/1L0HgVvj244/hqdefault.jpg' alt='yt' /></a>
      </Link>
      
      <Link href='https://www.youtube.com/watch?v=i4MDCciXoi4' >
      <a  target="_blank"><img className='hover:ring-gray-800 hover:ring-4'loading='lazy' src='https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg' alt='yt' /></a> 
      </Link>
    
      <Link href='https://www.youtube.com/watch?v=0fRMEOoB5N8' >
      <a  target="_blank"><img className='hover:ring-gray-800 hover:ring-4'loading='lazy' src='https://img.youtube.com/vi/0fRMEOoB5N8/hqdefault.jpg' alt='yt' /></a> 
      </Link>
      
     
      
        <Link  href='https://www.youtube.com/watch?v=ql-R8jJ6a5I' >
        <a  target="_blank"><img className='hover:ring-gray-800 hover:ring-4'loading='lazy' src='https://img.youtube.com/vi/ql-R8jJ6a5I/hqdefault.jpg' alt='yt' /></a>
      </Link>
      
      <Link href='https://www.youtube.com/watch?v=iZISf-QknPA' >
      <a  target="_blank"><img className='hover:ring-gray-800 hover:ring-4'loading='lazy' src='https://img.youtube.com/vi/iZISf-QknPA/hqdefault.jpg' alt='yt' /></a> 
      </Link>
      <Link href='https://www.youtube.com/watch?v=iZISf-QknPA' >
      <a  target="_blank"><img className='hover:ring-gray-800 hover:ring-4'loading='lazy' src='https://img.youtube.com/vi/iZISf-QknPA/hqdefault.jpg' alt='yt' /></a> 
      </Link>
      </div>

      
      
          </div>
  )
}

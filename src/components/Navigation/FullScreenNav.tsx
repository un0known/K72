import React from 'react'

function FullScreenNav() {
    return (
        <>
            <div className='text-white bg-black h-screen w-full absolute z-999' id='fullscreennav'>
                <div className="flex w-full justify-between items-start">
                    <div className='p-3'>
                        <div className='w-28'>
                            <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='h-32 w-32 relative cursor-pointer'>
                        <div className='h-44 w-1 -rotate-45 origin-top absolute bg-blue-800'></div>
                        <div className='h-44 w-1 right-0 rotate-45 origin-top absolute bg-blue-800'></div>
                    </div>
                </div>
                <div className='mt-[8vw]'>
                    {/* ######## WORK ######### */}
                    <div className="link border-t group relative  h-[7vw] py-1 w-full overflow-hidden">
                        <h1 className='text-[7vw] font-[font2] text-center uppercase leading-none'>work</h1>
                        {/* ########## HOVER DIV ########## */}
                        <div className='bg-yellow-300 transition-all absolute top-0 h-0 w-full leading-none
                         group-hover:h-full duration-300 inset-0 opacity-0 group-hover:opacity-100'>
                            <div className='moveX flex gap-3 text-8xl font-[font2] leading-none items-center text-black'>
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>see everything</h2>
                                <img src="/fullnav/work1.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>see everything</h2>
                                <img src="/fullnav/work2.png" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                {/* DUPLICATE CONTENT */}
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>see everything</h2>
                                <img src="/fullnav/work1.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>see everything</h2>
                                <img src="/fullnav/work2.png" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                            </div>

                        </div>
                    </div>
                    {/* ######## AGENCY ######### */}
                    <div className="link border-t group relative h-[7vw] py-1 w-full overflow-hidden">
                        <h1 className='text-[7vw] font-[font2] text-center uppercase leading-none'>agency</h1>
                        {/* ########## HOVER DIV ########## */}
                        <div className='bg-yellow-300 transition-all absolute top-0 h-0 w-full leading-none
                         group-hover:h-full duration-300 inset-0 opacity-0 group-hover:opacity-100'>
                            <div className='moveX flex gap-3 text-8xl font-[font2] leading-none items-center text-black'>
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>know us</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>know us</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                {/* DUPLICATE CONTENT */}
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>know us</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>know us</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                            </div>

                        </div>
                    </div>
                    {/* ######## CONTENT ######### */}
                    <div className="link border-t group relative h-[7vw] py-1 w-full overflow-hidden">
                        <h1 className='text-[7vw] font-[font2] text-center uppercase leading-none'>content</h1>
                        {/* ########## HOVER DIV ########## */}
                        <div className='bg-yellow-300 transition-all absolute top-0 h-0 w-full leading-none
                         group-hover:h-full duration-300 inset-0 opacity-0 group-hover:opacity-100'>
                            <div className='moveX flex gap-3 text-8xl font-[font2] leading-none items-center text-black'>
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>send us a fex</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>send us a fex</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                {/* DUPLICATE CONTENT */}
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>send us a fex</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>send us a fex</h2>
                                <img src="/fullnav/agency.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                            </div>

                        </div>
                    </div>
                    {/* ######## BLOG ######### */}
                    <div className="link border-y group relative h-[7vw] py-1 w-full overflow-hidden">
                        <h1 className='text-[7vw] font-[font2] text-center uppercase leading-none'>blog</h1>
                        {/* ########## HOVER DIV ########## */}
                        <div className='bg-yellow-300 transition-all absolute top-0 h-0 w-full leading-none
                         group-hover:h-full duration-300 inset-0 opacity-0 group-hover:opacity-100'>
                            <div className='moveX flex gap-3 text-8xl font-[font2] leading-none items-center text-black'>
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>read articles</h2>
                                <img src="/fullnav/blog1.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>read articles</h2>
                                <img src="/fullnav/blog2.gif" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                {/* DUPLICATE CONTENT */}
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>read articles</h2>
                                <img src="/fullnav/blog1.jpg" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                                <h2 className='text-[8vw] font-[font2] text-center uppercase leading-none whitespace-nowrap'>read articles</h2>
                                <img src="/fullnav/blog2.gif" alt="" className='h-24 mb-4 w-72 object-cover rounded-full shrink-0' />
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default FullScreenNav
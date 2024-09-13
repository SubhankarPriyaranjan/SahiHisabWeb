import React from 'react'

function AboutUs() {
  return (
    <div>
     

     <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Control your Finances with our <span className="text-indigo-600">Smart Tool</span>
        </h1>
        <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire wealth easily.
        </p>
    </div>
</section>

<section className="py-14 lg:py-24 relative">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
                <img src="https://pagedone.io/asset/uploads/1702034769.png" alt="About Us tailwind page" className="max-lg:mx-auto" />
            </div>
            <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                    <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                        About Us
                    </h2>
                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                        Driven by a passion for seamless user experiences, we've meticulously curated pagedone to empower creators, designers, and developers alike. Our mission is to provide a comprehensive toolkit, enabling you to build intuitive, beautiful interfaces that resonate with users on every interaction.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="py-14 lg:py-24 relative">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
                <div className="data w-full">
                    <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page" className="block lg:hidden mb-9 mx-auto" />
                    <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                        We are Creative Since 2005
                    </h2>
                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                        Pagedone isn’t just a collection of components and guidelines; it's a philosophy. We go beyond aesthetics, prioritizing accessibility, scalability, and usability. Every element, from the tiniest detail to the grandest layout, is meticulously crafted to enhance functionality and elevate user satisfaction.
                    </p>
                </div>
            </div>
            <div className="img-box">
                <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page" className="hidden lg:block" />
            </div>
        </div>
    </div>
</section>

<section className="py-20 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
        <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                    <div className="font-manrope text-2xl font-bold text-indigo-600">
                        240%
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                        <p className="text-xs text-gray-500 leading-5">Company's remarkable growth journey as we continually innovate and drive towards new heights of success.</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                    <div className="font-manrope text-2xl font-bold text-indigo-600">
                        175+
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                        <p className="text-xs text-gray-500 leading-5">Our very talented team members are the powerhouse of pagedone and pillars of our success.</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                    <div className="font-manrope text-2xl font-bold text-indigo-600">
                        625+
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
                        <p className="text-xs text-gray-500 leading-5">We have accomplished more than 625 projects worldwide and we are still counting many more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="py-14 lg:py-24 bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">What our happy users say!</h2>
        </div>

        <div style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }} className="swiper mySwiper2">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="relative mb-20">
                        <div className="max-w-max mx-auto lg:max-w-4xl">
                            <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                                I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="relative mb-20">
                        <div className="max-w-max mx-auto lg:max-w-4xl">
                            <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                                I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="relative mb-20">
                        <div className="max-w-max mx-auto lg:max-w-4xl">
                            <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                                I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div thumbsSlider="" className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="https://pagedone.io/asset/uploads/1704349534.png" alt="Emily image" className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
                </div>
                <div className="swiper-slide">
                    <img src="https://pagedone.io/asset/uploads/1704349572.png" alt="Ethan image" className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
                </div>
                <div className="swiper-slide">
                    <img src="https://pagedone.io/asset/uploads/1704349514.png" alt="Olivia image" className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
                </div>
            </div>
        </div>
    </div>
</section>

<section className="py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-6">
            Meet our soldier of finance
          </h2>
          <p className="text-lg text-gray-500 text-center">
            We provide all the advantage that can simplify all your financial and banking support without any further issues
          </p>
        </div>
        
        <div className="swiper teamswiper pb-10">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="group w-full flex-wrap flex items-center gap-8 transition-all duration-500 p-8 lg:flex-nowrap">
                <div className="w-full lg:w-48 h-64">
                  <img src="https://pagedone.io/asset/uploads/1696238786.png" alt="image"
                    className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"/>
                </div>
                <div className="text-center lg:text-left lg:max-w-xs flex-1">
                  <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                    <h6 className="text-lg text-gray-900 font-semibold mb-1">Harsh Patel</h6>
                    <span className="text-sm text-gray-500 group-hover:text-indigo-600">Co-Founder & CEO</span>
                  </div>
                  <p className="text-gray-500 leading-6 mb-7">
                    I am the co-founder of pagedone and we’ve pushed our limit so far to make it successful.
                  </p>
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                      <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="" fill="currentColor" />
                      </svg>
                    </p>
                    <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="" fill="currentColor" />
                      </svg>
                    </p>
                    <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600">
                      <svg className="w-5 h-5" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="" fill="currentColor" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the swiper-slide block for other slides */}
            {/* Make sure to update image sources, names, and roles as needed */}
          </div>
          <button id="slider-button-left"
            className="swiper-button-prev p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
            data-carousel-prev>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button id="slider-button-right"
            className="swiper-button-next p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
            data-carousel-next>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11.6158 5L16.6669 10.0511M16.6669 10.0511L11.6158 15.1022M16.6669 10.0511L1.66699 10.0511" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <div className="swiper-pagination"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </section>

    <section class="py-20 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="bg-indigo-600 rounded-2xl p-8 xl:p-11">
                <h2 class="font-manrope text-4xl text-white text-center font-bold mb-4">Subscribe to the latest offer
                </h2>
                <p class="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">Join our community of subscribers
                    and receive regular
                    updates delivered straight to your inbox. It's quick, easy, and free</p>
                    <div
  className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between"
>
  <input
    type="text"
    name="email"
    className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300 text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
    placeholder="Enter your email.."
  />
  <button
    type="submit"
    className="py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700"
  >
    Subscribe
  </button>
</div>

            </div>
        </div>
    </section>

    <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-md:max-w-sm max-md:mx-auto">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <a href="javascript:;" className="cursor-pointer flex justify-center lg:justify-start">
                            <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="" fill="#111827" />
                                {/* Add more <path> elements here if needed */}
                                <defs>
                                    <linearGradient id="paint0_linear_9129_4680" x1="35" y1="1.89063" x2="1.11152" y2="33.4573" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7C3AED" />
                                        <stop offset="0.993738" stopColor="#4F46E5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_9129_4680" x1="35" y1="1.89063" x2="1.11152" y2="33.4573" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#7C3AED" />
                                        <stop offset="0.993738" stopColor="#4F46E5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                            Trusted in more than 100 countries & 5 million customers. Have any query?
                        </p>
                        <a href="javascript:;" className="py-2.5 cursor-pointer px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                            Contact us
                        </a>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Home</a>
                            </li>
                            <li className="mb-6">
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">About</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Pricing</a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Figma UI System</a>
                            </li>
                            <li className="mb-6">
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Icons Assets</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Responsive Blocks</a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Customer Support</a>
                            </li>
                            <li className="mb-6">
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="cursor-pointer text-gray-600 hover:text-gray-900">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Subscribe</h4>
                        <p className="text-sm text-gray-500 leading-6 mb-7">Subscribe to get the latest news from us</p>
                        <a href="javascript:;" className="flex cursor-pointer items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50">
                            Subscribe
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500">©pagedone 2024, All rights reserved.</span>
                        <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
                            <a href="javascript:;" className="w-8 cursor-pointer h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-black/80 hover:bg-black">
                                <svg className="w-5 h-5 text-white group-hover:text-white" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="javascript:;" className="group cursor-pointer relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-900 before:content[''] before:absolute before:bg-[url('././images/footer/instagram.png')] before:w-full before:h-full before:-z-10">
                                <svg className="w-8 h-8 text-white" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_8797_65643)">
                                        <rect className="fill-url(#paint0_linear_8797_65643) h-tr group-hover:fill-black" x="0.0585938" width="26" height="26" rx="13" fill="url(#paint0_linear_8797_65643)" />
                                        <path d="" fill="white" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_8797_65643" x1="25.5589" y1="26" x2="-0.441125" y2="-6.99847e-07" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FBE18A" />
                                            <stop offset="0.21" stopColor="#F8D442" />
                                            <stop offset="0.48" stopColor="#F6B537" />
                                            <stop offset="0.83" stopColor="#F26C1C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                            <a href="javascript:;" className="cursor-pointer w-8 h-8 rounded-full flex justify-center items-center bg-[#2B2D2F] hover:bg-gray-800">
                                <svg className="w-5 h-5 text-white" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.7105 3.33755L15.0926 4.96116C14.8731 5.06972 14.6423 5.16952 14.4086 5.26544L16.2812 7.54335L15.7084 9.83562L12.6663 8.05551L12.0557 7.54335L11.7894 7.83562L11.2797 8.04798L10.2793 7.83562L9.26371 8.83773L8.31786 9.19361L6.42636 8.1759L5.68258 8.16892L5.53632 8.3634L4.95873 9.19664L3.72248 10.0792L3.27624 11.2902L2.20795 10.1617L1.1617 10.0792L1.60854 9.39376L0.967735 8.06979C0.789585 7.68776 0.559322 7.36786 0.287856 7.12676C0.21248 6.72887 0.218927 6.36789 0.325247 6.03557L1.02832 4.95107L2.25452 3.77103L3.41932 2.83878L4.49337 1.76998L5.66322 1.70964L6.65465 2.57386L8.43861 1.44656L9.82979 0.417935L10.7901 0.275038L11.6144 0.511485L12.5355 1.29064L13.3191 1.68973L14.7242 1.70016L15.9121 1.66503L17.7105 3.33755ZM11.6727 3.29351L10.7022 2.78871L9.92952 3.20884L10.3476 4.01318L11.5691 3.99072L11.6727 3.29351ZM3.91518 4.36171L2.82743 5.49211L1.42507 7.03853L2.24429 8.19153L4.29756 7.86557L6.35931 7.0385L7.37272 8.07353L8.70283 7.44649L7.53536 6.13637L6.98209 6.49368L6.48876 6.65356L5.35653 6.63694L4.67416 6.49859L4.04727 6.84371L3.91518 4.36171Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="javascript:;" className="cursor-pointer w-8 h-8 rounded-full flex justify-center items-center bg-[#151515] hover:bg-gray-800">
                                <svg className="w-4 h-4 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C3.58985 16 0 12.3164 0 8C0 3.6836 3.58985 0 8 0C12.4101 0 16 3.6836 16 8C16 12.3164 12.4101 16 8 16ZM8 1.33333C4.593 1.33333 1.33333 4.593 1.33333 8C1.33333 11.407 4.593 14.6667 8 14.6667C11.407 14.6667 14.6667 11.407 14.6667 8C14.6667 4.593 11.407 1.33333 8 1.33333ZM11.3333 6.33333H6.66667V7.33333H11.3333V6.33333ZM11.3333 8.66667H6.66667V9.66667H11.3333V8.66667ZM11.3333 11H6.66667V12H11.3333V11Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default AboutUs

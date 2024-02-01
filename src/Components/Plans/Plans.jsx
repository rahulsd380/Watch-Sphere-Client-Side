import { IoCloudDoneSharp } from "react-icons/io5";

const Plans = () => {
    return (
       <div className="max-w-7xl mx-auto bg-gray-800 rounded-lg shadow-inner p-5 mb-10">
        <h1 className="text-3xl font-semibold text-blue-400 text-center mb-1">View Our Plans</h1>
        <p className="text-gray-400 text-center">Discover tailored solutions for every need. Click 'View Our Plans' to explore <br /> and choose the perfect option for you.</p>
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-10 px-5 md:px-20">
            
            {/* Plan 1 */}
            <div className="md:w-[300px] bg-gray-900 rounded-xl space-y-8 my-20 relative p-8">
          {/* top part  */}
          <div>
              <img className="w-[60px] border h-[60px] object-cover rounded-full p-2 bg-slate-100 duration-300 hover:scale-105" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg" alt=""
              />
              {/* Price Ribbon SVG  */}
              <div className="absolute -top-4 -right-[20px] ">
                  <div className="w-full h-full relative">
                      {/* svg  */}
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="120" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><defs><linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#0095FF', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} /></linearGradient></defs><g><path d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z" style={{ fill: 'url(#skyGradient)' }}/><path d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z" style={{ fill: '#1976d2' }}/></g></svg>
                      {/* Price  */}
                      <div className="absolute top-8 left-7 text-white text-xl font-semibold flex flex-col">
                          <span>
                              <sub className="font-normal text-sm">$</sub>
                              <span>99</span>
                          </span>
                          <span className="text-xs font-normal">/month</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="space-y-4">
              <p className="text-gray-300 capitalize">most popular</p>
              <h3 className="text-2xl font-bold text-blue-400">Advence</h3>
              <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      Custom profile an more
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      Custom emoji anywhere
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      HD video streaming
                  </li>
              </ul>
              <div className="pt-4 flex justify-center">
              <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded py-2 px-6 w-full"
      >
        Purchase
      </button>
              </div>
          </div>
      </div>

            {/* Plan 2 */}
            <div className="md:w-[300px] bg-gray-900 rounded-xl space-y-8 my-20 relative p-8 border-t-2 border-blue-400">
          {/* top part  */}
          <div>
              <img className="w-[60px] border h-[60px] object-cover rounded-full p-2 bg-slate-100 duration-300 hover:scale-105" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg" alt=""
              />
              {/* Price Ribbon SVG  */}
              <div className="absolute -top-4 -right-[20px] ">
                  <div className="w-full h-full relative">
                      {/* svg  */}
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="120" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><defs><linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#0095FF', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} /></linearGradient></defs><g><path d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z" style={{ fill: 'url(#skyGradient)' }}/><path d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z" style={{ fill: '#1976d2' }}/></g></svg>
                      {/* Price  */}
                      <div className="absolute top-8 left-7 text-white text-xl font-semibold flex flex-col">
                          <span>
                              <sub className="font-normal text-sm">$</sub>
                              <span>99</span>
                          </span>
                          <span className="text-xs font-normal">/month</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="space-y-4">
              <p className="text-gray-300 capitalize">most popular</p>
              <h3 className="text-2xl font-bold text-blue-400">Advence</h3>
              <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      Custom profile an more
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      Custom emoji anywhere
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      HD video streaming
                  </li>
              </ul>
              <div className="pt-4 flex justify-center">
              <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded py-2 px-6 w-full"
      >
        Purchase
      </button>
              </div>
          </div>
      </div>

            {/* Plan 3 */}
            <div className="md:w-[300px] bg-gray-900 rounded-xl space-y-8 my-20 relative p-8">
          {/* top part  */}
          <div>
              <img className="w-[60px] border h-[60px] object-cover rounded-full p-2 bg-slate-100 duration-300 hover:scale-105" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg" alt=""
              />
              {/* Price Ribbon SVG  */}
              <div className="absolute -top-4 -right-[20px] ">
                  <div className="w-full h-full relative">
                      {/* svg  */}
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="120" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><defs><linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#0095FF', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} /></linearGradient></defs><g><path d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z" style={{ fill: 'url(#skyGradient)' }}/><path d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z" style={{ fill: '#1976d2' }}/></g></svg>
                      {/* Price  */}
                      <div className="absolute top-8 left-7 text-white text-xl font-semibold flex flex-col">
                          <span>
                              <sub className="font-normal text-sm">$</sub>
                              <span>99</span>
                          </span>
                          <span className="text-xs font-normal">/month</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="space-y-4">
              <p className="text-gray-300 capitalize">most popular</p>
              <h3 className="text-2xl font-bold text-blue-400">Advence</h3>
              <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      Custom profile an more
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      Custom emoji anywhere
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                  <IoCloudDoneSharp className="text-xl text-blue-400"></IoCloudDoneSharp>
                      HD video streaming
                  </li>
              </ul>
              <div className="pt-4 flex justify-center">
              <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded py-2 px-6 w-full"
      >
        Purchase
      </button>
              </div>
          </div>
      </div>
        </div>
       </div>
    );
};

export default Plans;
import React from "react";

function Footer_Dash() {
  return (
    <footer>
      <div class="nfooter flex flex-col w-full h-72 md:h-64 px-4 py-1 space-y-4 bg-[#0C2D4A] md:justify-center md:items-center">
        <div class="f-content">
          <div class="flex flex-col space-y-3 md:flex-row md:h-full md:items-center">
            <div class="flex flex-col mt-4 f-defination md:w-1/2">
              <h2 class="text-4xl md:text-5xl my-1 font-bold text-[#E53F19] font-primary">
                ViaDuct
              </h2>
              <p class=" text-lg  md:text-lg font-normal text-white w-2/3 md:w-3/4 md:px-2">
                It is a virtual guidance platform that serves as a bridge
                between students and mentors.
              </p>
            </div>
            <div class="neo flex flex-col w-1/2 md:h-full md:justify-end md:items-end">
              <p class="md:text-lg font-normal text-white">
                Made with :heart: by
              </p>
              <h2 class="text-3xl md:my-1 font-bold text-[#E53F19] font-primary">
                The Neophytes
              </h2>
            </div>
          </div>
        </div>
        <div class="line h-[0.15rem] w-3/4 bg-[#5C6F89] rounded-xl"></div>
        <div class=" text-white md:mt-7">
          <h4>© 2022 ViaDuct. All rigths reserved</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer_Dash;

import React from "react";

function Footer_Land() {
  return (
    <footer className="Footer flex flex-col" id="Footer">
      <div className="flex bg-darkblue h-64 w-full">
        <div className="content m-auto">
          <button className="ml-16 md:ml-28 md:m-auto text-lg transition ease-in-out delay-150 bg-white rounded-full px-10 py-3 border-2 hover:bg-transparent hover:border-skin hover:bg-darkblue hover:text-skin md:mt-2 border-darkblue text-darkblue">
            Feedback
          </button>
          <h2 className="md:text-xl mt-5 md:mt-5 text-skin text-base">
            Made with ❤️ in Jind, Hisar and Faridabad
          </h2>
          <div className="flex justify-around mt-6">
            <div>
              <a
                href="https://www.linkedin.com/in/ankitsingho3o/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  style={{ fill: "#000000" }}
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  />
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  />
                </svg>
              </a>
              <h2 className="text-lg text-skin m-auto">Ankit</h2>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/nishant-kumar-singh-1252nks/ "
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  style={{ fill: "#000000" }}
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  />
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  />
                </svg>
              </a>
              <h2 className="text-lg text-skin m-auto">Nishant</h2>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/dhruv-panchal-a43b3420a/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  style={{ fill: "#000000" }}
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  />
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  />
                </svg>
              </a>
              <h2 className="text-lg text-skin m-auto">Dhruv</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a374b] mb-0 flex flex-row">
        <div className="text-white px-auto py-5 mx-auto ">© V-Guide 2022</div>
      </div>
    </footer>
  );
}

export default Footer_Land;

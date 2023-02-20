import Button from "./Button";
import img from "../../images/Group 281.png"

function Section3() {

  return (
    <div className="section3">
      <div className="section3_left">
        <h3>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
       <Button svg={<svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.24 14.24C23.3658 13.1142 23.9983 11.5872 23.9983 9.99504C23.9983 8.40285 23.3658 6.87588 22.24 5.75004C21.1142 4.62419 19.5872 3.9917 17.995 3.9917C16.4028 3.9917 14.8758 4.62419 13.75 5.75004L7 12.5V21H15.5L22.24 14.24Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 10L4 24"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 17H11"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>} span={"We connect our customers with the best."} colors={"#0A2640"}/>
       <Button svg={ <svg className="svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_62_553)">
              <path
                d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_553">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.775024 0.654297)"
                />
              </clipPath>
            </defs>
          </svg>} span={"Advisor success customer launch party."} color2={"#000000"}/>
       <Button svg={ <svg className="svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_62_578)">
              <path
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 1V3"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 21V23"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.22 4.21997L5.64 5.63997"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.36 18.3601L19.78 19.7801"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 12H3"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 12H23"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.22 19.7801L5.64 18.3601"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.36 5.63997L19.78 4.21997"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_578">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>} span={"Business-to-consumer long tail."} color2={"#000000"}/>
           

      </div>
      <div className="section3_right">
        <img src={img} alt="" />

      </div>


      
    </div>

  );
}

export default Section3;

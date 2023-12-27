import { useState } from "react";
import Arrow from "../../img/arrow-down.png";
const More = ({ urls, index,  }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleDownload = (url) => {
    console.log(url);
   
  };
  return (
    <>
      <button onClick={() => setShowDetails(!showDetails)}>
        more{" "}
        <img
          className={`inline-block ${
            showDetails ? "rotate-180 " : ""
          }transition`}
          src={Arrow}
          alt=""
          width={20}
          height={20}
        />
      </button>
      <div
        className={`absolute z-[1000] ${
          showDetails ? "flex" : "hidden"
        } right-[-30px] top-[100%] items-center justify-evenly flex-col text-[#fff3b0] w-[150px] h-[100px] rounded-lg bg-[#335c67]`}
      >
        <button
          className="w-max rounded-lg text-[#fff3b0]"
          onClick={() => handleDownload(urls[index])}
        >
          Download
        </button>
        <p>File Details</p>
      </div>
    </>
  );
};

export default More;

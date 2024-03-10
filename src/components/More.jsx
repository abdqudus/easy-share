import { useState } from "react";
import Arrow from "../../img/arrow-down.png";
import { supabase } from "../..";
import { download, formatBytes } from "../utils";

import About from "./About.jsx";
const More = ({ data, index, fileid }) => {
  const [isOpen, setIsOpen] = useState(false)
  const file = data[index]
  const [showDetails, setShowDetails] = useState(false);
  const getDownloadLink = (name) => {
    const { data } = supabase
      .storage
      .from('files')
      .getPublicUrl('public/' + fileid + '/' + name, {
        download: true,
      })
    download(data.publicUrl)
  };
  return (
    <>
      <button onClick={() => setShowDetails(!showDetails)}>
        more{" "}
        <img
          className={`inline-block ${showDetails ? "rotate-180 " : ""
            }transition`}
          src={Arrow}
          alt=""
          width={20}
          height={20}
        />
      </button>
      <div
        className={`absolute z-[1000] ${showDetails ? "flex" : "hidden"
          } right-[-30px] top-[100%] items-center justify-evenly flex-col text-[#fff3b0] w-[150px] h-[100px] rounded-lg bg-[#335c67]`}
      >
        <button
          className="w-max rounded-lg text-[#fff3b0]"
          onClick={() => getDownloadLink(data[index].name)}
        >
          Download
        </button>
        <p onClick={() => setIsOpen(prev => !prev)}>File Details</p>
        {isOpen && <About file={file} fileid={fileid} setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};

export default More;

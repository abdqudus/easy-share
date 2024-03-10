import React from "react";
import { formatBytes } from "../utils";
import Close from "../../img/close.png";
// type Arg = {
//   file: File;
//   //   file: {name:st};
//   fileid: string;
//   setIsOpen: (arg: boolean) => null;
// };
const About = ({ file, fileid, setIsOpen }) => {
  console.log(file);
  const handleClose =
    // <T extends React.SyntheticEvent>
    (e) => {
      e.stopPropagation();
      setIsOpen(false);
    };

  return (
    <div
      onClick={handleClose}
      className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[800px] rounded-md py-3 bg-[#e09f3e] text-[#fff3b0]"
      >
        <header className="flex justify-between items-center flex-wrap border-b border-b-[#335c67] p-4">
          <p className=" font-semibold text-3xl">File Details</p>
          <img
            onClick={handleClose}
            src={Close}
            alt="close details"
            width="30"
            height="30"
          />
        </header>
        <section className=" p-4 border-b border-b-[#335c67] ">
          <div className="flex justify-between sm:gap-4 items-center flex-wrap mb-4 sm:mb-2  text-2xl">
            <p className="">File Name :</p>
            <p className="max-w-[400px] whitespace-nowrap overflow-hidden text-ellipsis">
              {file.name}
            </p>
          </div>
          <div className="flex justify-between sm:gap-4 items-center sm:mb-2 mb-4 flex-wrap text-2xl">
            <p className="">Location :</p>
            <p className="max-w-[400px] whitespace-nowrap overflow-hidden text-ellipsis">
              {fileid}
            </p>
          </div>
          <div className="flex justify-between sm:gap-4 items-center flex-wrap text-2xl sm:mb-2 mb-4">
            <p className="">File Size :</p>
            <p className="max-w-[400px] whitespace-nowrap overflow-hidden text-ellipsis">
              {formatBytes(file.metadata.size)}
            </p>
          </div>
        </section>
        <div className="p-4 flex flex-row-reverse">
          <button
            onClick={handleClose}
            className="bg-[#fff3b0] text-2xl font-semibold tracking-wider text-[#e1a03e] rounded-md  px-6 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

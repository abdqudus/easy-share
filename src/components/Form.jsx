import Upload from "../../img/upload-icon.png";
import { useSelectFile } from "../customhooks/useFileContext";
const Form = () => {
  const { dragActive, handleDrag, handleDrop, handleSelect } = useSelectFile();
  const border = dragActive ? 'border-green-800 border-4' : 'border-[#335c67] border-2'
  console.log()
  return (
    <form
      onDragEnter={handleDrag}

      className=
      {`relative w-[80%] px-4 py-3 flex items-center justify-center flex-col' mx-auto mt-6 max-w-[700px] rounded-xl border-dashed ${border} `}

    >
      <label
        htmlFor="file"
        className="w-full flex items-center justify-center flex-col"
      >
        <div className="w-[30px]">
          <img
            src={Upload}
            alt="upload"
            width={30}
            height={30}
            className="max-w-full"
          />
        </div>
        <p className="flex items-center justify-center text-center ">
          {dragActive ? ' You can drop it now' : 'Click to upload or drag and drop'}
        </p>
      </label>
      <input onChange={handleSelect} multiple type="file" name="" id="file" className="sr-only" />
      {dragActive && (
        <div
          className="absolute w-full h-full inset-0 rounded-xl"
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default Form;

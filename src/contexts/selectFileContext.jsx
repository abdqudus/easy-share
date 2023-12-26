import { createContext, useState } from "react";

export const FileContext = createContext(null);

const SelectFileContext = ({ children }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const filesArray = [...e.dataTransfer.files];
      setSelectedFiles(filesArray.map((arr, i) => ({ file: arr, id: i })));
    }
  };
  const handleRemove = (e) => {
    setSelectedFiles(selectedFiles.filter((f) => f.id != e.target.id));
  };
  return (
    <FileContext.Provider
      value={{
        handleDrag,
        handleDrop,
        dragActive,
        selectedFiles,
        setSelectedFiles,
        handleRemove,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default SelectFileContext;

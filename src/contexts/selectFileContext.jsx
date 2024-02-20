import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const FileContext = createContext(null);

const SelectFileContext = ({ children }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleSelect = e => {
    const isFile = e.target.files && e.target.files[0]
    if (isFile) setSelectedFiles(prev => ([...prev, { file: e.target.files[0], id: uuidv4() }]))
  }
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
      const newFile = filesArray.map((arr, i) => ({ file: arr, id: uuidv4() }))
      setSelectedFiles(prev => ([...prev, ...newFile]));
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
        handleSelect
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default SelectFileContext;

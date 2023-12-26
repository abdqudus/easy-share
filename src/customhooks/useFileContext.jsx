import { useContext } from "react";
import { FileContext } from "../contexts/selectFileContext";

export const useSelectFile = () => useContext(FileContext);

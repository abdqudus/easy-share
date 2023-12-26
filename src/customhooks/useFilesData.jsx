import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../..";

const useFilesData = (fileid) => {
  const [urls, setUrls] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const listRef = ref(storage, fileid);
    let isMounted = true;
    listAll(listRef)
      .then((res) => {
        if (isMounted) {
          const newPaths = res.items.map((itemRef) => itemRef._location.path_);
          const metaDataPromises = newPaths.map((path) =>
            getMetadata(ref(storage, path))
          );
          const urlPromises = newPaths.map((path) => {
            return getDownloadURL(ref(storage, path));
          });

          Promise.all(metaDataPromises).then((d) => setData(d));
          Promise.all(urlPromises).then((urls) => {
            setUrls(urls);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      isMounted = false;
    };
  }, [fileid]);
  return { data, urls };
};

export default useFilesData;

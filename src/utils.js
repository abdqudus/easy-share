import { supabase } from "..";

export const upload = async (file, id) => {
  return supabase.storage
    .from("files")
    .upload(`public/${id}/${file.name}`, file)
    .catch((err) => console.log(err));
};

export const download = (downloadUrl) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = downloadUrl;
  downloadLink.download = name; // Specify the filename for the downloaded file
  document.body.appendChild(downloadLink);

  // Programmatically click on the anchor element to initiate the download
  downloadLink.click();

  // Cleanup: remove the anchor element from the DOM
  document.body.removeChild(downloadLink);
};

export const formatBytes = (bytes) => {
  bytes = Number(bytes);
  if (bytes < 1024) {
    return bytes + " bytes";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }
};

export async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  }
}

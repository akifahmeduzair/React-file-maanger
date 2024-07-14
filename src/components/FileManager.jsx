import React from "react";
import FileList from "./FileList";

const FileManager = ({
  currentPath,
  setCurrentPath,
  files,
  setFiles,
  onEdit,
  onDelete,
}) => {
  const handleFileClick = (file) => {
    if (file.type === "folder") {
      setCurrentPath([...currentPath, file.name]);
    }
  };

  const currentFiles = files.filter(
    (file) => file.path.join("/") === currentPath.join("/")
  );
  const hasFilesOrFolders = currentFiles.length > 0;

  return (
    <div className="file-manager">
      <h2>{hasFilesOrFolders ? "Folders" : "No files"}</h2>
      <FileList
        files={files}
        currentPath={currentPath}
        onFileClick={handleFileClick}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default FileManager;

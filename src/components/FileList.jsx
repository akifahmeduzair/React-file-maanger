import React from "react";
import FileCard from "./FileCard";

const FileList = ({ files, currentPath, onFileClick, onEdit, onDelete }) => {
  const currentFiles = files.filter(
    (file) => file.path.join("/") === currentPath.join("/")
  );

  return (
    <div className="file-list">
      {currentFiles.map((file, index) => (
        <FileCard
          key={index}
          file={file}
          onDoubleClick={() => onFileClick(file)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default FileList;

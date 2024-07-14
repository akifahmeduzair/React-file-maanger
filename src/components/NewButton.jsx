import React, { useState, useRef } from "react";
import "./styles/NewButton.css";

const NewButton = ({ currentPath, setFiles, files }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const fileInputRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNewFolder = () => {
    const newFolderName = generateUniqueFolderName(currentPath, files);
    const newFolder = {
      name: newFolderName,
      type: "folder",
      path: [...currentPath],
    };
    setFiles([...files, newFolder]);
    setShowDropdown(false);
  };

  const generateUniqueFolderName = (currentPath, files) => {
    let newName = "New Folder";
    let suffix = 1;
    while (
      files.some(
        (file) =>
          file.name === newName && file.path.join("/") === currentPath.join("/")
      )
    ) {
      newName = `New Folder (${suffix})`;
      suffix++;
    }
    return newName;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file.type);
      const newFile = { name: file.name, type: file.type, path: currentPath };
      setFiles([...files, newFile]);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="new-button">
      <button className="dropbtn-new" onClick={toggleDropdown}>
        + New
      </button>
      {showDropdown && (
        <div className="dropdown-content-new">
          <button onClick={handleNewFolder}>New Folder</button>
          <button onClick={triggerFileUpload}>Upload File</button>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden-input"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default NewButton;

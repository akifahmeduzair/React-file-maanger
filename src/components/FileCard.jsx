import React, { useState } from "react";
import pdfLogo from "../assets/pdf-logo.png";
import docLogo from "../assets/doc-logo.png";
import imageLogo from "../assets/image-logo.png";
import videoLogo from "../assets/video-logo.png";
import audioLogo from "../assets/audio-logo.png";
import folderLogo from "../assets/folder-logo.png";
import defaultLogo from "../assets/default-logo.png";
import "./styles/FileCard.css";

const FileCard = ({ file, onDelete, onEdit, onDoubleClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newFileName, setNewFileName] = useState(file.name);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setShowDropdown(false);
  };

  const handleSave = () => {
    onEdit(file.name, newFileName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log(`Request to delete: ${file.name}`);
    onDelete(file.name);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const truncateFileName = (name, maxLength = 22) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...";
    }
    return name;
  };

  const getFileLogo = (fileType) => {
    const fileTypeMap = {
      "application/pdf": pdfLogo,
      "application/msword": docLogo,
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        docLogo,
      "image/jpeg": imageLogo,
      "image/png": imageLogo,
      "image/gif": imageLogo,
      "video/mp4": videoLogo,
      "video/mpeg": videoLogo,
      "audio/mpeg": audioLogo,
      "audio/wav": audioLogo,
      folder: folderLogo,
    };

    return fileTypeMap[fileType] || defaultLogo;
  };

  return (
    <div className="file-card" onDoubleClick={onDoubleClick}>
      <div className="file-card-header">
        <img
          src={getFileLogo(file.type)}
          alt="file logo"
          className="file-logo"
        />
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            ⋮
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
      {isEditing ? (
        <input
          type="text"
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }
          }}
        />
      ) : (
        <p className="file-name">{truncateFileName(file.name)}</p>
      )}
    </div>
  );
};

export default FileCard;

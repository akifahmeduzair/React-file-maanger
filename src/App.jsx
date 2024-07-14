import React, { useState } from "react";
import Header from "./components/Header";
import FileManager from "./components/FileManager";
import "./App.css";

const App = () => {
  const [currentPath, setCurrentPath] = useState([]);
  const [files, setFiles] = useState([
    { name: "Folder1", type: "folder", path: [] },
    { name: "File1.txt", type: "file", path: [] },
    { name: "New Folder", type: "folder", path: [] },
    { name: "SubFile.txt", type: "file", path: ["New Folder"] },
    { name: "SubFolder", type: "folder", path: ["New Folder"] },
    { name: "SubSubFile.txt", type: "file", path: ["New Folder", "SubFolder"] },
  ]);

  const handleEdit = (oldName, newName) => {
    setFiles(
      files.map((file) =>
        file.name === oldName && file.path.join("/") === currentPath.join("/")
          ? { ...file, name: newName }
          : file
      )
    );
  };

  const handleDelete = (name) => {
    console.log(`Deleting: ${name}`);
    const targetPath = [...currentPath, name].join("/");
    const updatedFiles = files.filter(
      (file) => ![...file.path, file.name].join("/").startsWith(targetPath)
    );
    console.log("Updated Files:", updatedFiles);
    setFiles(updatedFiles);
  };

  return (
    <div className="app">
      <Header
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
        files={files}
        setFiles={setFiles}
      />
      <FileManager
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
        files={files}
        setFiles={setFiles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;

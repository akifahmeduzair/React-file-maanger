import React from "react";
import Breadcrumb from "./Breadcrumb";
import NewButton from "./NewButton";

const Header = ({ currentPath, setCurrentPath, files, setFiles }) => {
  return (
    <header>
      <Breadcrumb currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <NewButton currentPath={currentPath} setFiles={setFiles} files={files} />
    </header>
  );
};

export default Header;

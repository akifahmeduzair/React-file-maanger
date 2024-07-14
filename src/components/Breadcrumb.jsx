import React from "react";

const Breadcrumb = ({ currentPath, setCurrentPath }) => {
  const navigateTo = (index) => {
    setCurrentPath(currentPath.slice(0, index + 1));
  };

  const renderBreadcrumb = () => {
    if (currentPath.length <= 4) {
      return currentPath.map((folder, index) => (
        <span key={index} onClick={() => navigateTo(index)}>
          {" / "}
          {folder}
        </span>
      ));
    } else {
      return (
        <>
          <span onClick={() => navigateTo(0)}> / {currentPath[0]}</span>
          <span onClick={() => navigateTo(1)}> / {currentPath[1]}</span>
          <span> / ...</span>
          <span onClick={() => navigateTo(currentPath.length - 2)}>
            {" "}
            / {currentPath[currentPath.length - 2]}
          </span>
          <span onClick={() => navigateTo(currentPath.length - 1)}>
            {" "}
            / {currentPath[currentPath.length - 1]}
          </span>
        </>
      );
    }
  };

  return (
    <nav>
      <span onClick={() => setCurrentPath([])}>Home</span>
      {renderBreadcrumb()}
    </nav>
  );
};

export default Breadcrumb;

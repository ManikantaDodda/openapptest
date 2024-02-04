// Upload.jsx

import React, { useState, useRef } from 'react';
import { FaUpload  } from 'react-icons/fa';
import { SiMicrosoftexcel } from "react-icons/si";
import './upload.css';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    console.log('File uploaded:', selectedFile);
  };
  const onButtonClick = () => {
    inputRef.current.click();
  };
  
  const removeFile = () =>{
    setSelectedFile(null);
  }
  

  return (
    <div className="upload-container">
      <div className="upload-card">
        <div className="dotted-line">
          <span className="excel-icon"><SiMicrosoftexcel size={40} /></span>
          {selectedFile == null ? <>
          <p>Drop your Excel file here or <span style ={{color:'blue'}} onClick={onButtonClick}>Browse</span> </p></> : 
          <> <p>{selectedFile.name}</p><p style={{color:'red'}} onClick={removeFile}>Remove</p></>}
          <input ref={inputRef} type="file" id="input-upload-file" onChange={handleFileChange} />
        </div>
        <button onClick={handleUpload}>
          <FaUpload /> Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;

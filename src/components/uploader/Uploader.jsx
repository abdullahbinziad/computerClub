import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./uploader.css";
import uploadImg from "../../assets/icons/cloud-upload-regular-240.png";

const Uploader = ({setImage,image}) => {

  const [previewUrl, setPreviewUrl] = useState(image);
  const wrapperRef = useRef(null);



  const [fileList, setFileList] = useState(null);

 useEffect(()=>{
  if(image === "reset"){
    setFileList(null);
    setPreviewUrl("");
  }
 },[image])

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");


  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFileList(newFile);
      // props.onFileChange(updatedList);


      setImage(newFile)
      const imageUrl = URL.createObjectURL(newFile);
      setPreviewUrl(imageUrl);
      console.log("Clicked");
    }
  };




  const fileRemove = () => {
    setFileList(null);
    setPreviewUrl(null);
    console.log("removed click");
    // props.onFileChange();
  };



  return (
    <>
      <div
        className={`${
          previewUrl ? "justify-around" : ""
        } flex justify-center w-full shadow-lg my-3 rounded-lg p-4`}
      >
        <div
          ref={wrapperRef}
          className="drop-file-input flex-1 "
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label flex flex-col items-center ">
            <img className="w-20" src={uploadImg} alt="" />
            <p>Drag & Drop your files here</p>
          </div>
          <input type="file" value="" onChange={onFileDrop} />
        </div>
       { previewUrl ? <div className={`${previewUrl ? " flex-1" : ""} `}>
          <div className="drop-file-preview">
            <p className="drop-file-preview__title">Ready to upload</p>

            <div  className="drop-file-preview__item">
              <img src={previewUrl} alt="" />
              <div className="drop-file-preview__item__info">
                
              </div>                                                                   
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove()}
              >
                x
              </span>
            </div>
          </div>
        </div> : ""}
      </div>
    </>
  );
};

Uploader.propTypes = {
  onFileChange: PropTypes.func,
};

export default Uploader;

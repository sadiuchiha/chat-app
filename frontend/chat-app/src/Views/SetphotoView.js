import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function SetphotoView(props) {
  var { files, setFiles } = useState({});

  const ShowImage = (image) => {
    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

        image = file;
        console.log(file);
      },
    });

    useEffect(() => {
      console.log(image)
    }, [image]);

    console.log("Showing image " + (image != null? true : false) + " " + image);
    return image? (
      <img src={image[0].preview} alt="preview"></img>
    ) : (
      <div {...getRootProps()}>
        <input {...getInputProps()}></input>
        <label>Drag and drop photo</label>
      </div>
    );
  };

  return (
    <div className="center">
      <form className="set-photo center">
        <div className="propic-container medium center">{ShowImage(files)}</div>
        <label>Set up Profile Picture</label>
        <button>Complete Registration</button>
      </form>
    </div>
  );
}

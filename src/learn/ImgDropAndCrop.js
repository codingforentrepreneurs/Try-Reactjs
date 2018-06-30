import React, { Component } from 'react'

import Dropzone from 'react-dropzone'

const imageMaxSize = 10 // bytes

class ImgDropAndCrop extends Component {

    handleOnDrop = (files, rejectedFiles) => {
        // console.log(files)
        // console.log('rejected files are', rejectedFiles)
        if (rejectedFiles && rejectedFiles.length > 0){
            const currentRejectFile = rejectedFiles[0]
            const currentRejectFileType = currentRejectFile.type
            const currentRejectFileSize = currentRejectFile.size
            if(currentRejectFileSize > imageMaxSize) {
                alert("This file is too big")
            }
        }


        if (files && files.length > 0){
            const currentFile = files[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if(currentFileSize > imageMaxSize) {
                alert("This file is too big")
            }
        }
    }

  render () {
    return (
      <div>
        <h1>Drop and Crop</h1>
        <Dropzone onDrop={this.handleOnDrop} accept='image/*' multiple={false} maxSize={imageMaxSize}>Drop file here</Dropzone>
      </div>
    )
  }
}

export default ImgDropAndCrop

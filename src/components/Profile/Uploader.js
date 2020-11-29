import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

function Uploader() {
  // const [ pictures, setPictures ] = useState('');

  //   onDrop(picture) {
  //     this.setState({
  //         pictures: this.state.pictures.concat(picture),
  //     });
  // }

  // function onDrop() {}

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={this.onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
    />
  );
}

export default Uploader();

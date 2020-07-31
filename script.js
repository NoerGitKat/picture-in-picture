const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    // 1. Prompt to select media stream
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // 2. Assign to video DOM element
    videoElement.srcObject = mediaStream;
    // 3. Play video when metadata is loaded
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      // 4. Start Picture in Picture
      videoElement.requestPictureInPicture();
    };
  } catch (error) {
    console.error(error);
  }
}

button.onclick = () => {
  // 1. Disable button
  button.disabled = true;
  // 2. Start media stream
  selectMediaStream();
  // 3. Enable button
  button.disabled = false;
};

// TODO: Remove Picture in Picture when video is cancelled

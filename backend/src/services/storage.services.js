import imagekit from "imagekit";

var ImageKit = new imagekit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export async function uploadImage(file, filename) {
  return new Promise((resolve, reject) => {
    ImageKit.upload(
      {
        file: file.buffer,
        fileName: filename,
        folder: "/posts",
        mimeType: file.mimetype,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

export async function uploadUserImage(file, filename) {
  return new Promise((resolve, reject) => {
    ImageKit.upload(
      {
        file: file.buffer,
        fileName: filename,
        folder: "/UserProfile",
        mimType: file.mimetype,
      },
      (error, result) => {
        if (error) {
          reject();
        } else {
          resolve(result);
        }
      }
    );
  });
}

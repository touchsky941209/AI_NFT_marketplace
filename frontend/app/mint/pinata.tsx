const axios = require('axios');
const FormData = require('form-data');
const key = process.env.NEXT_APP_PINATA_KEY;
const secret = process.env.NEXT_APP_PINATA_SECRET;
const token = process.env.NEXT_APP_PINATA_JWT;


export const uploadJSONToIPFS = async(JSONBody) => {

  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(function (response) {
      return {
          success: true,
          pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
      };
    })
    .catch(function (error) {
      console.log(error)
      return {
          success: false,
          message: error.message,
      }

  });
};

export const uploadFileToIPFS = async(file) => {
  const formData = new FormData();
  if(!file) return;
  formData.append('file', file)

  const metadata = JSON.stringify({
    name: 'File name',
  });
  formData.append('pinataMetadata', metadata);

  try{
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: "Infinity",
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `Bearer ${token}`,
      }
    });
    console.log(res.data);
    return {
      success: true,
      pinataURL: "https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error
    };
  }
};
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types"; 

function QRCodeGenerator({ price }) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    if (price) {
      generateQRCode(price);
    }
  }, [price]);

  const generateQRCode = async (text) => {
    try {
      // Generate the QR code URL with the product price
      const response = await axios.get(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=128x128`
      );
      
      // Set the QR code URL
      setQrCodeUrl(response.request.responseURL);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) {
      alert("No QR Code to download.");
      return;
    }
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div>
      {qrCodeUrl && (
        <div>
          <h3>Generated QR Code:</h3>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
      <button onClick={downloadQRCode}>Download QR</button>
    </div>
  );
}

export default QRCodeGenerator;
// Prop validation
QRCodeGenerator.propTypes = {
    price: PropTypes.number.isRequired, // Validate that `price` is a number and is required
  };
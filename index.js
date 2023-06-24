const express = require('express');
const qr = require('qr-image');

const app = express();
// const port = 3000;
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  const { url } = req.query;

  // Generate QR code with larger size
  const qrCode = qr.image(url, { type: 'png', size: 16 });

  // Set the response headers for downloading the image
  res.setHeader('Content-Disposition', 'attachment; filename="QR_Code.png"');
  res.setHeader('Content-Type', 'image/png');

  // Pipe the QR code image to the response
  qrCode.pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function generateQRCode() {
    const textInput = document.getElementById('text-input').value;

    if (textInput.trim() === '') {
        alert('Please enter text or URL before generating the QR code.');
        return;
    }

    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';

    const qrcode = new QRCode(qrcodeContainer, {
        text: textInput,
        width: 128,
        height: 128
    });

    addDownloadButton(qrcodeContainer, qrcode);
}

function addDownloadButton(container, qrcode) {
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download QR Code';
    downloadBtn.addEventListener('click', () => downloadQRCode(container, qrcode));

    container.appendChild(downloadBtn);
}

function downloadQRCode(container, qrcode) {
    const dataUrl = qrcode._el.firstChild.toDataURL('image/png'); // Get the data URL from the QR code image

    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'qrcode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

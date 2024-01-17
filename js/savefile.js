
async function onloadfile ( event ) {
  var text = await event.target.files[0].text();
  document.querySelector("textarea[id='saveFileTextArea']").value = text;

  split = text.split('#')
  saver = CryptoJS.AES.decrypt(split[0], CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b"), { iv: CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457"), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
  save = CryptoJS.AES.decrypt(split[1], CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b"), { iv: CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457"), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
  dto = CryptoJS.AES.decrypt(split[2], CryptoJS.enc.Hex.parse("0901f87d5725efde4e4ae88cc197230b"), { iv: CryptoJS.enc.Hex.parse("14ce63b855acd907c451a1777e592457"), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)

  document.querySelector("textarea[id='saverTextArea']").value = saver;
  document.querySelector("textarea[id='saveTextArea']").value = save;
  document.querySelector("textarea[id='dtoTextArea']").value = dto;
}
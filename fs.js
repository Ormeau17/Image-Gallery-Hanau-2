for (let i = 1; i <= 104; i++) {
  let padded = i.toString().padStart(2, '0');
  console.log(`<img src="images/ducati_1098/ducati_1098_${padded}.jpg" alt="Image ${i}" class="gallery-img" onclick="openModal(this)">`);
}
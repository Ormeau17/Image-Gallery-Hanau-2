for (let i = 1; i <=343; i++) {
  let padded = i.toString().padStart(2, '0');
  console.log(
    `<img src="images/highball_taggerty/taggerty_${padded}.jpg" alt="Image ${i}" class="gallery-img" onclick="openModal(this)">`
  );
}
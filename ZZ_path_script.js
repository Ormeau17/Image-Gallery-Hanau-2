for (let i = 1; i <=81; i++) {
  let padded = i.toString().padStart(2, '0');
  console.log(
    `<img src="images/moto_gp_2024/motogp_${padded}.jpg" alt="Image ${i}" class="gallery-img" onclick="openModal(this)">`
  );
}
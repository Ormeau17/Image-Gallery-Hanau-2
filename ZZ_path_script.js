for (let i = 1; i <=127; i++) {
  let padded = i.toString().padStart(2, '0');
  console.log(
    `<img src="images/grip_attack_lakeside/grip_${padded}.jpg" alt="Image ${i}" class="gallery-img" onclick="openModal(this)">`
  );
}
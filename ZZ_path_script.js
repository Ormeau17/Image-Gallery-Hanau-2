for (let i = 1; i <=61; i++) {
  let padded = i.toString().padStart(2, '0');
  console.log(
    `<img src="images/dfo_meet/dfo_meet_${padded}.jpg" alt="Image ${i}" class="gallery-img" onclick="openModal(this)">`
  );
}
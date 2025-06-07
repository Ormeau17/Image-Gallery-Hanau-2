for (let i = 1; i <=140; i++) {
  let padded = i.toString().padStart(2, '0');
  console.log(
    `<img src="images/highball_cars_coffee_clayton/coffee_${padded}.jpg" alt="Image ${i}" class="gallery-img" onclick="openModal(this)">`
  );
}
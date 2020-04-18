const buildPlanes = (plane) => {
  let domString = '';
  domString += '<div class="fancy-card plane">';
  domString += '<div class="additional">';
  domString += '<div class="user-card">';
  domString += `<img width="450" src="${plane.imageUrl}" alt="image of ${plane.make} ">`;
  domString += '</div>';
  domString += '<div class="more-info shading">';
  domString += `<div class="card-title mb-3 mt-3 ml-3 mr-3">${plane.make}</div>`;
  domString += '<div class="coords">';
  domString += '</div>';
  domString += '<div class="coords">';
  domString += `<div class="text-center">Plane Model: ${plane.model}</div>`;
  domString += '</div>';
  domString += '<div class="stats">';
  domString += '<div>';
  domString += '<i class="fas fa-users"></i>';
  domString += `<div class="value">${plane.seatingCapacity}</div>`;
  domString += '</div>';
  domString += '<div>';
  domString += '<i class="fas fa-plane"></i>';
  domString += `<div class="value">${plane.type}</div>`;
  domString += '</div>';
  domString += '<div>';
  domString += '<i class="fas fa-dollar-sign"></i>';
  domString += `<div class="value">${plane.price}</div>`;
  domString += '</div>';
  domString += '<div>';
  domString += '<i class="fas fa-tachometer-alt"></i>';
  domString += `<div class="value">${plane.speed}</div>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="general hubGeneral">';
  domString += `<div class="card-title mb-3 mt-3">${plane.make}</div>`;
  domString += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>';
  domString += '<span class="more">Mouse over the card for more info</span>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildPlanes };
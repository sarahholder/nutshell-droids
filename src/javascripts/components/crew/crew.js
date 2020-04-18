
const buildCrew = (crew) => {
  let domString = '';
  domString += '<div class="center">';
  domString += '<div class="card">';
  domString += '<div class="additional">';
  domString += '<div class="user-card">';
  domString += '<div class="text-center">';
  domString += '<h2>Crew</h2>';
  domString += `<img class=""src="${crew.img}" height="120" width="120">`;
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="more-info">';
  domString += `<div class="card-title" >name:${crew.name}</div>`;
  domString += '<div class="coords col-8 ">';
  domString += '<i class="fas fa-city"></i>';
  domString += `<span >Base City: ${crew.baseCity}</span>`;
  domString += '<i class="fas fa-cogs"></i>';
  domString += `<span>Position:${crew.position}</span>`;
  domString += '</div>';
  domString += '<div class="coords col-9">';
  domString += '<i class="fas fa-user-plus"></i>';
  domString += `<span>Hire Date:${crew.hireDate} 12/15/2010</span>`;
  domString += '<div class="row col-12 ml-auto ">';
  // domString += '<i class="fas fa-edit"></i>';
  // domString += '<i class="fas fa-user-times"></i>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="general">';
  domString += `<div class="card-title">${crew.name}</div>`;
  domString += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>';
  domString += '<span class="more">Mouse over the card for more info</span>';
  domString += '</div>';
  return domString;
};

export default { buildCrew };

import '../css/menuStyle.css';

export default function menuComponent() {
  const element = document.createElement('div');
  element.className = 'menuContainer';

  const menuList = document.createElement('div');
  menuList.className = 'menuList';

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Menu';

  const menuOne = document.createElement('div');
  menuOne.className = 'menuDisplay';
  const menuOneTitle = document.createElement('h4');
  menuOneTitle.textContent = 'American Salad';
  const menuOneList = document.createElement('p');
  menuOneList.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet';
  const menuOnePrice = document.createElement('small');
  menuOnePrice.textContent = '$25';
  menuOne.append(menuOneTitle, menuOneList, menuOnePrice);

  const menuTwo = document.createElement('div');
  menuTwo.className = 'menuDisplay';
  const menuTwoTitle = document.createElement('h4');
  menuTwoTitle.textContent = 'French Salad';
  const menuTwoList = document.createElement('p');
  menuTwoList.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet';
  const menuTwoPrice = document.createElement('small');
  menuTwoPrice.textContent = '$35';
  menuTwo.append(menuTwoTitle, menuTwoList, menuTwoPrice);

  const menuThree = document.createElement('div');
  menuThree.className = 'menuDisplay';
  const menuThreeTitle = document.createElement('h4');
  menuThreeTitle.textContent = 'Spanish Salad';
  const menuThreeList = document.createElement('p');
  menuThreeList.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet';
  const menuThreePrice = document.createElement('small');
  menuThreePrice.textContent = '$45';
  menuThree.append(menuThreeTitle, menuThreeList, menuThreePrice);

  menuList.append(menuTitle, menuOne, menuTwo, menuThree);

  element.append(menuList);
  return element;
}

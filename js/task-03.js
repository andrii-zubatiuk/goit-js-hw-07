const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGallery = images => {
  const listRef = document.querySelector('#gallery');

  const arrItems = images.map(image => {
    const listItemRef = document.createElement('li');
    listItemRef.classList.add('gallery__item');

    const imgRef = document.createElement('img');
    imgRef.setAttribute('src', image.url);
    imgRef.setAttribute('alt', image.alt);
    imgRef.setAttribute('width', '350px');
    imgRef.setAttribute('height', '230px');
    listItemRef.append(imgRef);

    return listItemRef;
  });

  listRef.append(...arrItems);
};

createGallery(images);

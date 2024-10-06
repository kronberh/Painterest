import imagesLoaded from 'imagesloaded';

function resizeMasonryItem(item: any): void {
  let grid = document.getElementsByClassName('masonry')[0],
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  let rowSpan = Math.ceil(
    (item.querySelector('.masonry-content').getBoundingClientRect().height) / (rowHeight + rowGap)
  );

  item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllMasonryItems(): void {
  let allItems = document.getElementsByClassName('masonry-item');

  for (let i = 0; i < allItems.length; i++) {
    resizeMasonryItem(allItems[i]);   
  }
}

function waitForImages(): void {
  let allItems = document.getElementsByClassName('masonry-item');
  for (let i = 0; i < allItems.length; i++) {
    imagesLoaded(allItems[i], function (instance: any) {
      let item = instance.elements[0];
      resizeMasonryItem(item);
    });
  }
}

let masonryEvents = ['load', 'resize'];
masonryEvents.forEach(function (event) {
  window.addEventListener(event, resizeAllMasonryItems);
});

export { waitForImages };
import imagesLoaded from 'imagesloaded';

function resizeMasonryItem(item: any): void {
  let grid: Element = document.getElementsByClassName('masonry')[0],
    rowGap: number = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
    rowHeight: number = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  let rowSpan: number = Math.ceil(
    (item.querySelector('.masonry-content').getBoundingClientRect().height) / (rowHeight + rowGap)
  );
  item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllMasonryItems(): void {
  let allItems: HTMLCollectionOf<Element> = document.getElementsByClassName('masonry-item');
  for (let i: number = 0; i < allItems.length; i++) {
    resizeMasonryItem(allItems[i]);   
  }
}

function waitForImages(): void {
  let allItems: HTMLCollectionOf<Element> = document.getElementsByClassName('masonry-item');
  for (let i: number = 0; i < allItems.length; i++) {
    imagesLoaded(allItems[i], function (instance: any) {
      let item: any = instance.elements[0];
      resizeMasonryItem(item);
    });
  }
}

let masonryEvents: string[] = ['load', 'resize'];
masonryEvents.forEach(function (event: any) {
  window.addEventListener(event, resizeAllMasonryItems);
});

export { waitForImages };
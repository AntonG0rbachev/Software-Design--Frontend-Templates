import { renderHtml } from './rendering.js'

export function swipeNext(list, changingBlock) {
  if (list.getNext() == null) {
    console.error('next item missing')
  } else {
    console.log(`before turn right:\n head is ${list.head().element}\n next is ${list.getNext().element}`);
    var nextForm = list.getNext();
    list.moveNext();
    console.log(`after turn right:\n head is ${list.head().element}\n prev is ${list.getPrevious().element}`);
    renderHtml(nextForm.element, changingBlock)
  }
}

export function swipePrevious(list, changingBlock) {
  if (list.getPrevious() == null) {
    console.error('previous item missing')
  } else {
    console.log(`before turn left:\n head is ${list.head().element}\n prev is ${list.getPrevious().element}`);
    var previousForm = list.getPrevious();
    list.movePrevious();
    console.log(`after turn left: ${list.head().element}`);
    renderHtml(previousForm.element, changingBlock);
  }
}

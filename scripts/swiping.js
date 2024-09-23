import { renderHtml } from './rendering.js'

export function swipeNext(list, changingBlock) {
  if (list.getNext() == null) {
    console.error('next item missing')
  } else {
    var nextForm = list.getNext();
    list.moveNext();
    renderHtml(nextForm.element, changingBlock)
  }
}

export function swipePrevious(list, changingBlock) {
  if (list.getNext() == null) {
    console.error('previous item missing')
  } else {
    var previousForm = list.getPrevious();
    list.movePrevious();
    renderHtml(previousForm.element, changingBlock);
  }
}

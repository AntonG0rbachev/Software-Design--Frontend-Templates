import { renderHtml } from './rendering.js'
import { LinkedList } from './linked_list.js'

export function swipeNext(changingBlock) {
  if (list.getNext() == null) {
    console.error('next item missing')
  } else {
    var nextForm = list.getNext();
    list.moveNext();
    renderHtml(nextForm.element, changingBlock)
  }
}

export function swipePrevious(changingBlock) {
  if (list.getNext() == null) {
    console.error('previous item missing')
  } else {
    var previousForm = list.getPrevious();
    list.movePrevious();
    renderHtml(previousForm.element, changingBlock);
  }
}

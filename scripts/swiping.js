import { renderHtml } from './rendering.js'
import { LinkedList } from './linked_list.js'

var list = new LinkedList();
list.addAll([
  '/forms/login/login.html',
  '/forms/signup/signup.html',
]);
list.setHeadAtStart();

function swipeNext() {
  if (list.getNext() == null) {
    console.error('next item missing')
  } else {
    nextForm = list.getNext();
    list.moveNext();
    renderHtml(nextForm, changingBlock)
  }
}

function swipePrevious() {
  if (list.getNext() == null) {
    console.error('previous item missing')
  } else {
    previousForm = list.getPrevious();
    list.movePrevious();
    renderHtml(previousForm, changingBlock);
  }
}

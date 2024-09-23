import { renderHtml } from './rendering.js'
import { LinkedList } from './linked_list'

list = new LinkedList()
list.addAll([
  '/forms/login/login.html',
  '/forms/signup/signup.html',
])

const moveRightButton = document.querySelector('#swipe-right-button');
const moveLeftButton = document.querySelector('#swipe-left-button');
const changingBlock = 'form-container';

function swipeNext() {
  nextForm = list.getNext();
  list.moveNext();
  renderHtml(nextForm, changingBlock)
}

function swipePrevious() {
  previousForm = list.getPrevious();
  list.movePrevious();
  renderHtml(previousForm, changingBlock);
}
import findIndex from 'lodash.findindex';
import reduce from 'lodash.reduce';

/*
  I will mix few coding styles here :)
  Idea of scoping services to persist data between routes is a pattern pointed by angular team members.
  To reduce scoping of service constructing factory function was added (as per functional programming def),
  which is at the same time example of js closure and response to OO constructor function :)
*/

function persistentCheckout() {
  const list = [];
  const getList = () => list.slice(); // slice preventing modification of output
  const getLength = () => reduce(list, (sum, n) => sum + n.count, 0);
  const getTotal = () => reduce(list, (sum, n) => sum + (n.count * n.price), 0);
  const flushCart = () => list.splice(0, list.length);

  const removeItem = id => {
    const index = findIndex(list, el => id === el.id);
    if (index !== -1) {
      list.splice(index,1);
    }
  }

  const reduceCount = id => {
    const index = findIndex(list, el => id === el.id);
    if (index !== -1) {
      // removing item from list if there is no more items
      list[index].count === 1 ? removeItem(id) : list[index].count--;
    }
  }

  const addItem = item => {
    const index = findIndex(list, el => item.id === el.id);
    if (index !== -1) {
      // if element in the cart
      list[index].count++
    } else {
      // cloning object with JS as oppose to angular.copy
      const newItem = Object.assign({ count: 1 }, item);
      list.push(newItem);
    }
  }

  return { getList, getLength, getTotal, removeItem, reduceCount, addItem, flushCart }
}

export default persistentCheckout;

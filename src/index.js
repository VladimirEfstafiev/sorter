class Sorter {
  constructor() {
    this._store=[];
    this._comparator;

  }

  add(element) {
   this._store.push(element);
  }

  at(index) {
   return  this._store[index];
  }

  get length() {
   return this._store.length;
  }

  toArray() {
   return this._store;
  }

  sort(indices) {
    indices.sort(defaultComparer);
    let subArray=[];

    for(let i in indices){
        subArray.push(this._store[indices[i]]);
      }

    if(!this._comparator){
        subArray.sort(defaultComparer)
    }else{
        subArray.sort(this._comparator);
        }

    for(let i in indices){
        this._store[indices[i]]=subArray[i];
        }
    }

  setComparator(compareFunction) {
      this._comparator=compareFunction;
  }
}
function defaultComparer(num1,num2){
  switch(true){
      case num1>num2:return 1;
      case num1<num2:return -1;
  }
}
module.exports = Sorter;

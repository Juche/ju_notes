const state = {
  count: 0,
}

function observe(obj) {
  Object.keys(obj).forEach(key => {
    let val = obj[key];
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        dep.depend();
        return val;
      },
      set(newVal) {
        val = newVal;
        dep.notify();
      }
    })
  })
}

class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if(curEffect) {
      this.subscribers.add(curEffect)
    }
  }
  notify() {
    this.subscribers.forEach(sub => sub())
  }
}

let curEffect = null;

function autoRun(update) {
  function wrapperUpdate() {
    curEffect = wrapperUpdate;
    update();
    curEffect = null;
  }
  wrapperUpdate();
}

observe(state)

let dep = new Dep();

autoRun(() => {
  console.log(state.count);
})

state.count++;
state.count++;

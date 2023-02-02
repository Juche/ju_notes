class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  // depend(effect) {
  //   if(!this.subscribers.has(effect)) {
  //     this.subscribers.add(effect);
  //   }
  // }
  depend() {
    if(activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }
  notify() {
    for (const effect of this.subscribers) {
      effect();
    }
  }
}

let activeEffect = null;

function autoRun(update) {
  function wrapperUpdate() {
    activeEffect = wrapperUpdate;
    update();
    activeEffect = null;
  }

  wrapperUpdate();
}

let dep = new Dep();

autoRun(() => {
  dep.depend();
  console.log('update');
})

dep.notify();

function bubbles(i=1){
  return Object.assign(Object.setPrototypeOf(()=>bubbles(i+1), Promise.prototype), {then:f=>f(i)})
}

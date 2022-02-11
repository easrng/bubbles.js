export default (function bubbles(i=0){
  return Object.assign(Object.setPrototypeOf(()=>bubbles(i+1), Promise.prototype), {then:f=>f(i)})
})()

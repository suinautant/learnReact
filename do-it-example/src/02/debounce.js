// debounce.js 실행 위해서는 export 삭제 필요
// 실행 후 다시 export 삽입할 것
// 실행용
function debounce(func, delay) {
  // 이후 사용용
  // export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
const run = debounce((val) => console.log(val), 100);
run('a');
run('b');
run('2');
// 100ms 이후
// 2

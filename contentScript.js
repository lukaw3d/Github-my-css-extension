
let style = document.createElement('style')
document.head.append(style)

window.navigation.addEventListener('navigatesuccess', () => {
  style.innerText = ``
  console.log('navigatesuccess', location.href)
  const PR_number = location.href.match(/pull\/(\d+)\//)?.[1]
  if (PR_number) {
    style.innerText = `
      a[title*=".changelog/"]:not([title*=".changelog/${PR_number}"]) {
        background: red;
      }
    `;
  }
})

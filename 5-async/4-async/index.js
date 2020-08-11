async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  // end -->
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    document.writeln(data);
  } catch (err) {
    console.log(err);
  }
}

const URL = 'http://localhost:3000/api';
fetchData(URL);

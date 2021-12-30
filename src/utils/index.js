function getChapterList(name) {
  const context = {}
  let url =
  console.log('`../assets/${name}`', `../assets/${name}`);
  let req
  if(name === 'book1') {
    req = require.context(`../assets/book1`, true, /.mp3$/);
  }else {
    req = require.context(`../assets/book2`, true, /.mp3$/);
  }
  let nameList = req.keys().map(key => {
    const name = key.match(/([a-zA-Z0-9].*)$/)[1];
    return name
  });
  return nameList
}


export default {
  getChapterList
}

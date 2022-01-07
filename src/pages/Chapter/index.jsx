import React, { useEffect, useState } from 'react';
import cover1 from '../../assets/images/book1-cover.png';
import cover2 from '../../assets/images/book2-cover.png';
import nail1 from '../../assets/images/thumbnail1.png';
import nail2 from '../../assets/images/thumbnail2.png';
import backurl from '../../assets/images/back-white.png';
import utils from '../../utils/index';
import './index.less';
import { useParams, useHistory } from 'react-router-dom';
const config = {
  book1: {
    url: cover1,
    nail: nail1,
    title: '《长河的红色记忆》',
    author: '中共长河镇委员会，慈溪市新四军研究会',
  },
  book2: {
    url: cover2,
    nail: nail2,
    title: '《长河革命斗争史记》',
    author: '长河镇镇志编辑部',
  },
};
function Chapter() {
  const [list, setList] = useState([]);
  const [playlist, setPlaylist] = useState([])
  const history = useHistory();
  const params = useParams();
  const info = config[params.name];
  useEffect(() => {
    const datasource = utils.getChapterList(params.name)
    let _playlist = []
    let list = datasource.map((item) => {
      let name = item.split('-')[1]
      let long = item.split('-')[2].split('.')[0]
      var reg = new RegExp( 'm' , "g" )
      long = long.replace(reg, "'")
      _playlist.push({
        name,
        singer: info.author,
        cover: `http://121.41.86.168:9999/cover/${params.name}-cover.png`,
        musicSrc: `http://121.41.86.168:9999/${params.name}/${item}`,
      })
      return {
        name,
        long,
      }
    })
    localStorage.setItem('playlist', JSON.stringify(_playlist))
    setPlaylist(_playlist)
    setList(list);
  }, []);

  function play(currentIndex) {
    history.push(`/player/${currentIndex}`);
  }

  return (
    <div className="chapter">
      <img
        className="back"
        onClick={() => {
          history.goBack();
        }}
        src={backurl}
      />
      <div className="book-cover">
        <img src={info.url} alt="" />
        <div className="title">{info.title}</div>
        <div className="author">◎编:{info.author}</div>
      </div>
      <div className="box">
        {list.map((item, index) => {
          return (
            <div className="item" onClick={() => play(index)}>
              <div className="left">
                <img src={info.nail} alt="thumbnail" />
                <div className="title">
                  <div style={{ fontSize: 16 }}>{item.name}</div>
                  <div style={{ color: '#888' }}>{info.title}</div>
                </div>
              </div>
              <div className="sec">{item.long}</div>
            </div>
          );
        })}
        <div className="list"></div>
      </div>
    </div>
  );
}

export default Chapter;

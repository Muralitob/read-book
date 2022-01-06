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
    author: '◎编:中共长河镇委员会，慈溪市新四军研究会',
  },
  book2: {
    url: cover2,
    nail: nail2,
    title: '《长河革命斗争史记》',
    author: '  ◎编:中共长河镇委员会，慈溪市新四军研究会',
  },
};
function Chapter() {
  const [list, setList] = useState([]);
  const history = useHistory();
  const params = useParams();
  const info = config[params.name];
  useEffect(() => {
    let list = utils.getChapterList(params.name);
    let arr = [];
    for (let i = 0; i < 50; i++) {
      arr = [...arr, ...list];
    }
    setList(arr);
  }, []);

  function play() {
    history.push(`/player/${params.name}`);
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
        <div className="author">{info.author}</div>
      </div>
      <div className="box">
        {list.map((filename) => {
          return (
            <div className="item" onClick={play}>
              <div className="left">
                <img src={info.nail} alt="thumbnail" />
                <div className="title">
                  <div style={{ fontSize: 16 }}>章节名称</div>
                  <div style={{ color: '#888' }}>{info.title}</div>
                </div>
              </div>
              <div className="sec">12'</div>
            </div>
          );
        })}
        <div className="list"></div>
      </div>
    </div>
  );
}

export default Chapter;

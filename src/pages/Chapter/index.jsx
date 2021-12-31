import React, { useEffect, useState } from 'react';
import utils from '../../utils/index';
import './index.less';
import { useParams, useHistory } from 'react-router-dom';
function Chapter() {
  const [list, setList] = useState([]);
  const history = useHistory();
  const params = useParams();
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
      <div className="img"></div>
      <div
        className="list"
        onScroll={(e) => {
          e.preventDefault();
          e.persist();
          // console.log('e', e);
        }}
      >
        {list.map((filename) => {
          return (
            <div className="item" onClick={play}>
              <span>章节：</span>
              <span>{filename}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chapter;

import React, { useEffect, useState } from 'react';
import utils from '../../utils/index';
import './index.less'
import { useParams } from 'react-router-dom';
function Chapter() {
  const [list, setList] = useState([])
  const params = useParams()
  useEffect(() => {
    let list = utils.getChapterList(params.name)
    setList(list)
  }, [])

  function play() {

  }

  return (
    <div className='chapter'>
      <div className="list">
        {
          list.map((filename) => {
            return (
              <div className='item'>
                <span>章节：</span>
                <span>{ filename }</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Chapter;

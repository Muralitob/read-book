import React, { useEffect } from 'react'
import { useHistory, } from 'react-router-dom';
import './style.less';

export default function Index() {
  const history = useHistory()
  function toChapter(bookname) {
    history.push(`/chapter/${bookname}`)
  }
  //
  //
  return (
    <div className='home'>
      <div className="box">
        <div className="stage">
          <div className="book" onClick={() => toChapter('book1')}>
            book1
            <div className="btn">点击查看</div>
          </div>
          <div className="book" onClick={() => toChapter('book2')}>
            book2
          </div>
        </div>
      </div>
    </div>
  )
}

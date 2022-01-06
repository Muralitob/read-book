import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cover1 from '../../assets/images/book1-cover.png';
import cover2 from '../../assets/images/book2-cover.png';
import btn from '../../assets/images/listen-btn.png';
import changhe from '../../assets/images/changhe1.png';
import './style.less';

export default function Index() {
  const history = useHistory();
  function toChapter(bookname) {
    history.push(`/chapter/${bookname}`);
  }

  return (
    <div className="home">
      <div className='logo'>
        <div className='img'>
          <img src={changhe} alt="" />
        </div>
      </div>
      <div className="box">
        <div className="stage">
          <div
            className="book"
            style={{ marginBottom: 24 }}
          >
            <div className="info">
              <div className="title">《长河的红色记忆》</div>
              <div className="author">
                <div style={{fontSize: 16}}>编：</div>
                <div>中共长河镇委员会</div>
                <div>慈溪市新四军研究会</div>
              </div>
              <div className="btn" onClick={() => toChapter('book1')}>
              <img src={btn} alt="btn" />
              </div>
            </div>
            <div className="cover">
              <img src={cover1} alt="" />
            </div>
          </div>
          <div className="book" >
            <div className="info">
              <div className="title">《长河革命斗争史记》</div>
              <div className="author">
                <div>编：</div>
                <div>长河镇镇志编辑部</div>
              </div>
              <div className="btn" onClick={() => toChapter('book2')}>
              <img src={btn} alt="btn" />
              </div>
            </div>
            <div className="cover">
              <img src={cover2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

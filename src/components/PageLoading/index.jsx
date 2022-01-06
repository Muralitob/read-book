import React from 'react';
import ReactLoading from 'react-loading';

function PageLoading() {
  return (
    <div style={{ textAlign: 'center' }}>
      <ReactLoading type={'spinningBubbles'} color={'#B53230'} height={667} width={375} />
    </div>
  );
}

export default PageLoading;

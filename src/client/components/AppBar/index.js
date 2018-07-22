import React from 'react';
import Styles from './AppBar.css';

function AppBar() {
  return (
    <div className={Styles.appBar} style={{ height: '64px' }}>
      <svg width="30px" height="30px" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid" focusable="false">
        <g>
          <polygon fill="#FFF" points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" />
          <polygon fill="#FFF" points="127.962 0 0 212.32 127.962 287.959 127.962 154.158" />
          <polygon fill="#FFF" points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" />
          <polygon fill="#FFF" points="127.962 416.9052 127.962 312.1852 0 236.5852" />
          <polygon fill="#FFF" points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" />
          <polygon fill="#FFF" points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" />
        </g>
      </svg>
    </div>
  );
}

export default AppBar;

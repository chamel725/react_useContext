import React from 'react';

const Content = ({ isDark }) => {
    return(
        <div
        className="content"
        style={{
            //isDark의 true false에 따라 색상이 바뀜
            backgroundColor: isDark? 'black' : 'white',
            color: isDark ? 'white' : 'black',
        }}
        >
            <p>이찬일님, 좋은 하루 되세요</p>
        </div>
    );
};

export default Content;
import './index.less';
import React from 'react';
import Pagination from 'rc-pagination';

const itemRender = (current, type, element) => {
  if (type === 'page') {
    return <p className='soy-numero'>{current}</p>;
  }
  return element;
};

const App = ({activePage}) =>{

  const handleChange = (page) => null

return (
  <Pagination total={`420`} defaultCurrent="1"   current={activePage}  
  itemRender={itemRender} onChange={handleChange}/>
);
}
export default App;
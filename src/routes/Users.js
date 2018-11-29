// routes/Users.jsx

import React, { PropTypes } from 'react';
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

// 最后用到了connect函数，需要在头部预先引入connect
import { connect } from 'dva';

function Users({ location, dispatch, users }) {

  const {
    loading, list, total, current,
    currentItem, modalVisible, modalType
    } = users;

  const userSearchProps={};

  // 使用传入的数据源，进行数据渲染
  const userListProps={
    dataSource: list,
    total,
    loading,
    current,
  };
  const userModalProps={};

  return (
    <div className={styles.normal}>
      {/* 用户筛选搜索框 */}
      <UserSearch {...userSearchProps} />
      {/* 用户信息展示列表 */}
      <UserList {...userListProps} />
      {/* 添加用户 & 修改用户弹出的浮层 */}
      <UserModal {...userModalProps} />
    </div>
  );
}

// 声明组件的props类型
Users.propTypes = {
  users: PropTypes.object,
};

// 指定订阅数据，并且关联到users中
function mapStateToProps({ users }) {
  return {users};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Users);
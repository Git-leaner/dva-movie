import React, { Component, PropTypes } from 'react';

// dva 的 connect 方法可以将组件和数据关联在一起
import { connect } from 'dva';

// 组件本身
const MyComponent = (props)=>{};

// propTypes属性，用于限制props的传入数据类型
MyComponent.propTypes = {};

// 声明模型传递函数，用于建立组件和数据的映射关系
// 实际表示 将ModelA这一个数据模型，绑定到当前的组件中，则在当前组件中，随时可以取到ModelA的最新值
// 可以绑定多个Model
function mapStateToProps({ModelA}) {
  return {ModelA};
}

// 关联 model
// 正式调用模型传递函数，完成模型绑定
export default connect(mapStateToProps)(MyComponent);

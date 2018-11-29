// models/users.js
// 使用静态数据返回，把userList中的静态数据移到此处
// querySuccess这个action的作用在于，修改了model的数据
export default {
  namespace: 'users',
  state： {},
  subscriptions: {},
  effects: {
    *query({ payload }, { select, call, put }) {
        yield put({ type: 'showLoading' });
        const { data } = yield call(query);
        if (data) {
          yield put({
            type: 'querySuccess',
            payload: {
              list: data.data,
              total: data.page.total,
              current: data.page.current
            }
          });
        }
      },
    },
  },
  reducers: {
    querySuccess(state){
        const mock = {
          total: 3,
          current: 1,
          loading: false,
          list: [
            {
              id: 1,
              name: '张三',
              age: 23,
              address: '成都',
            },
            {
              id: 2,
              name: '李四',
              age: 24,
              address: '杭州',
            },
            {
              id: 3,
              name: '王五',
              age: 25,
              address: '上海',
            },
          ]
        };
        // return 的内容是一个对象，涵盖原state中的所有属性，以实现“更新替换”的效果
        return {...state, ...mock, loading: false};
      }
  }
}
// 添加请求处理   包含了一个ajax请求
// models/users.js
import request from '../utils/request';
import qs from 'qs';
async function query(params) {
  return request(`/api/users?${qs.stringify(params)}`);
}


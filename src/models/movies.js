// 在models中引用
// models/users.js
// import {query} from '../services/http.js';
import * as http from '../services/http.js';
console.log(http.default)
export default {

  namespace: 'movies',

  state: {
    title:'',
    start:0,
    count:0,
    list:[],
    total:0,
    detail:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query}) => {
          console.log('modal',pathname,query)
        switch(pathname){
          case '/':
          case '/movies':
            dispatch({ type: 'fetch', payload: 'in_theaters' });
            break;
          case '/movie/in_theaters':
            dispatch({ type: 'fetch', payload: 'in_theaters' });
            break;
          case '/movie/top250':
            dispatch({ type: 'fetch', payload: 'top250' });
            break;
          case '/movie/coming_soon':
            dispatch({ type: 'fetch', payload: 'coming_soon' });
            break;
          case '/detail':
            dispatch({ type: 'detail', payload: query });
            break;
          // case '/users/patch':
          //   dispatch({ type: 'update', payload: { id, values } });
          //   break;
        }
      });
    },
  },

  effects: {
    *fetch({ payload:tp }, { call, put }) {  // eslint-disable-line
      const {data,headers}=yield call(http.default.query,{ tp })
      console.log(data,headers)
      yield put({ type: 'save' ,payload:data});
    },
    *detail({payload:id},{call,put},state){
      const detail=yield call(http.default.querybyid,{id})
      console.log(detail)
      yield put({type:'save',payload:{detail:detail.data}})
      // return {...state,detail:data}
    }
  },

  reducers: {
    // save(state, {payload:{subjects:list,title,start,count,total}}) {
    save(state, {payload:data}) {
      console.log(data)
      const {subjects:list,title,start,count,total,detail}=data
      // console.log({ ...state, list,title,start,count,total })
      return { ...state, list,title,start,count,total,detail };
    },
  },

};


import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { TabBar } from 'antd-mobile';
import ListViewExample from '../../components/ListViewExample.js';
import './tabbar.scss';


const iconListInfo=[
  {
    title:'Movie',
    key:'Movie',
    url:'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
    surl:'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
    Tab:'blueTab',
    path:'/movie/in_theaters',
    dataseed:'logId',
    badge:1
  },
  {
    title:'Koubei',
    key:'Koubei',
    url:'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
    surl:'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
    Tab:'redTab',
    path:'/movie/top250',
    dataseed:'logId1',
    badge:1
  },
  {
    title:'Friend',
    key:'Friend',
    url:'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
    surl:'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
    Tab:'greenTab',
    path:'/movie/coming_soon',
    dataseed:'logId',
    badge:0
  },
  {
    title:'My',
    key:'My',
    url:`url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat `,
    surl:`url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat`,
    Tab:'yellowTab',
    path:'/tv',
    dataseed:'logId',
    badge:0
  }
]


class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
      </div>
    );
  }

  render() {
    const tabbar=iconListInfo.map((it,idx)=>
      <TabBar.Item
            title={it.title}
            key={it.key}
            dot
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: it.url }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: it.surl }}
            />
            }
            selected={this.state.selectedTab === it.Tab }
            badge={it.badge}
            onPress={() => {
              this.props.dispatch(routerRedux.push({
                pathname: it.path,
              }));
              this.setState({
                selectedTab: it.Tab,
              });
            }}
            data-seed={it.dataseed}
          >
            {this.renderContent(it.title)}
          </TabBar.Item>
        );
    return (
      <div style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0, zIndex: 99}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >  
          {tabbar}
        </TabBar>
      </div>
    );
  }
}

export default connect()(TabBarExample);
// ReactDOM.render(<TabBarExample />, mountNode);
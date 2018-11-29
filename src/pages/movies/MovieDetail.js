import React from 'react';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history'
import { NavBar, Icon ,Tag,ListView,List } from 'antd-mobile';
import { connect } from 'dva';
import style from './MovieDetail.scss';
import SeparateLine from '../../components/separateline/SeparateLine.js';

const history = createHashHistory();
const Item = List.Item;
const Brief = Item.Brief;

console.log(history)
class MovieDetail extends React.Component{
	constructor(props) {
	  super(props);
	  console.log(props)
	  
	  this.state = {
	  	detail:{},
	  	render:false
	  };
	}
	componentWillReceiveProps(props){
		this.setState({
			detail:props.detail,
			render:true
		})
		console.log(props)
	}
	playvideo(el){
		console.log(el.target);
		console.log(el.currentTarget)
		el.target.play();
		el.target.setAttribute('autoplay','autoplay')
	}
	render() {
		let movie=this.state.detail;
		console.log(movie)
		const mvheader=()=>{
			if(this.state.render){
				return (
					<div className={style.mvtop}>
						<div style={{position: 'relative' ,width:'100%',height:'200px',overflow:'hidden',backgroundColor: '#000000'}}>
							<div className={style.headerbg} style={{backgroundImage:`url(${movie.images?movie.images.large:'none'})`}}></div>
							<div className={style.header} >
								<div className={style.mvImg}>
									<img width='100' height='160' src={movie.images?movie.images.large:'none'}></img>
								</div>
								<div className="style.mvCont">
									<p>{movie.title}</p>
									<p>{movie.rating.average}</p>
									<p>评论人数:{(movie.ratings_count)}</p>
									<p>{movie.genres}</p>
									<p>{movie.pubdates[1]}</p>
									<p>{movie.languages}</p>
								</div>
							</div>
						</div>
						<div className={style.mvDetail}>
							<div className={style.summary}>{movie.summary}</div>
							{movie.tags.map((it,idx)=>
								<Tag selected key={idx}>{it}</Tag>
							)}
						</div>
					</div>
				)
			}
		}
		
		const mvcasts=()=>{
			const row=(cast)=>{
				return (
					<div key={cast.id} className={style.cast}>
						<img width='100px' src={cast.avatars.medium} />
						<p>{cast.name}</p>
						<p><span>{cast.name_en}</span></p>
					</div>
				)
			}
			const ds = new ListView.DataSource({
		      rowHasChanged: (row1, row2) => row1 !== row2,
		    });
			if(this.state.render){
				const groups=()=>{
					var casts=[];
					movie.directors.forEach((it,idx)=>{
						casts.push(it)
					})
					movie.casts.forEach((it,idx)=>{
						casts.push(it)
					})
					return casts;
				}
				console.log(groups())
				return (
				  <ListView
			        ref={el => this.lv = el}
			        renderHeader={() => <span>导演及主要演员</span>}
			        dataSource={ds.cloneWithRows(groups())}
			        renderRow={row}
			        renderSectionBodyWrapper={
			        	()=>( <div style={{display: 'flex',lineHeight: '18px'}}></div>)
			        }
			        style={{
			          height: '275px',
			          flexDirection: 'row',
    				  alignItems: 'center',
			          overflow: 'auto'
			        }}
			        onScroll={() => { console.log('scroll'); }}
			        horizontal={true}
			      />
				)	
			}
		}
		const mvmedia=()=>{
			const ds = new ListView.DataSource({
		      rowHasChanged: (row1, row2) => row1 !== row2,
		    });
		    const photos=(photo)=>{
				return (
					<div key={photo.id} className={style.photo}>
						<img height='160px' src={photo.image} />
					</div>
				)
			}
			if(this.state.render){
				const groups=()=>{
					var photos=[];
					movie.photos.forEach((it,idx)=>{
						photos.push(it)
					})
					return photos;
				}
				console.log(groups())
				return (
				  <ListView
			        ref={el => this.lv = el}
			        renderHeader={() => <span>电影剧照</span>}
			        dataSource={ds.cloneWithRows(groups())}
			        renderRow={photos}
			        renderSectionBodyWrapper={
			        	()=>( <div style={{display: 'flex',lineHeight: '18px'}}></div>)
			        }
			        style={{
			          height: '220px',
			          flexDirection: 'row',
    				  alignItems: 'center',
			          overflow: 'auto'
			        }}
			        onScroll={() => { console.log('scroll'); }}
			        horizontal={true}
			      />
				)	
			}
		}
		const mvvideo=()=>{
			const ds = new ListView.DataSource({
		      rowHasChanged: (row1, row2) => row1 !== row2,
		    });
		    const videos=(video)=>{
				return (
					<div key={video.subject_id} className={style.video} onClick={(el)=>{this.playvideo(el)}}>
						<video width="400px" height="300px" src={video.resource_url} poster={video.medium} ></video>
					</div>
				)
			}
			if(this.state.render){
				const groups=()=>{
					var videos=[];
					movie.trailers.forEach((it,idx)=>{
						videos.push(it)
					})
					return videos;
				}
				return (
				  <ListView
			        ref={el => this.lv = el}
			        renderHeader={() => <span>电影预告</span>}
			        dataSource={ds.cloneWithRows(groups())}
			        renderRow={videos}
			        renderSectionBodyWrapper={
			        	()=>( <div style={{display: 'flex',lineHeight: '18px'}}></div>)
			        }
			        style={{
			          height: '360px',
			          flexDirection: 'row',
    				  alignItems: 'center',
			          overflow: 'auto'
			        }}
			        pageSize={1}
			        onScroll={() => { console.log('scroll'); }}
			        horizontal={true}
			      />
				)	
			}
		}
		return (
			<div style={{marginBottom: '50px'}}>
				<NavBar
			      mode="dark"
			      onLeftClick={() => window.history.back()}
			      leftContent="Back"
			      rightContent={[
			        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
			        <Icon key="1" type="ellipsis" />,
			      ]}
			    >{movie.title}</NavBar>
				<div id={style.detail} >
					{mvheader()}
					<SeparateLine></SeparateLine>
					{mvcasts()}
					<SeparateLine></SeparateLine>
					{mvmedia()}
					<SeparateLine></SeparateLine>
					{mvvideo()}
				</div>
			</div>
		)
	}
}
function mapStateToProps(state) {
	console.log(state)
  return {
  	detail:state.movies.detail,
  }
}
export default connect(mapStateToProps)(MovieDetail);
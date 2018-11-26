import React from 'react';
import classes from '../css/styles.css';


const NewsItem = ({item}) =>{


	return(
		<div className={classes.news_item}>
			<h3>{item.title}</h3>
				{item.feed}
			<div>
			</div>
		</div>
	)
}
export default NewsItem;
		


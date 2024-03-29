import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
  
    let{title, descreption,imgUrl, newsUrl}=this.props;
    return (
      <div>
       <div className="card" style={{width: "18rem",margin:"12px"}}>
  <img src={!imgUrl?"https://i.ytimg.com/vi/8rh2hNemOjw/maxresdefault.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{descreption}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems

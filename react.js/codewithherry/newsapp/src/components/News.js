import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:""
    };
  }

  async componentDidMount(){
    var url="https://newsapi.org/v2/everything?q=tesla&from=2023-11-29&sortBy=publishedAt&apiKey=150bbb463e4e419abda323f3bed0d242&page=1&pagesize=20"
    let data= await fetch(url);
    var parseData= await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,totalResults:parseData.totalResults});
  }
  
  handelNextClick=async()=>{
    if(this.state.page+1>Math.ceil(this.totalResults/20)){

    }
    
    var url=`https://newsapi.org/v2/everything?q=tesla&from=2023-11-29&sortBy=publishedAt&apiKey=150bbb463e4e419abda323f3bed0d242&page=${this.state.page+1}&pagesize=20`
    let data= await fetch(url);
    var parseData= await data.json();
   
    this.setState({articles:parseData.articles});

    this.setState({
      page:this.state.page+1,
      articles:parseData.articles

    });
    
  
  }
  handelPrevClick=async()=>{
    
    var url=`https://newsapi.org/v2/everything?q=tesla&from=2023-11-29&sortBy=publishedAt&apiKey=150bbb463e4e419abda323f3bed0d242&page=${this.state.page-1}&pagesize=20`
    let data= await fetch(url);
    var parseData= await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles});

    this.setState({
      page:this.state.page-1
    });


  }



  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>Welcome to News-With-Bilal</h1>
          <h3>Top Headlines</h3>
          <div className="row">
            {this.state.articles &&
              this.state.articles.map((element) => {
                return  <div className="col-md-4 ">
              <NewsItems
              key={element.url}
                title={element.title?element.title:""}
                descreption={element.description?element.description:""}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
              })}
          
          </div>
        </div>
              <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<1} type="button" className="btn btn-dark" onClick={this.handelPevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
          </div>
      </div>
    );
  }
}

export default News;

import React, { Component } from 'react'
import Item from './Item'

export class News extends Component {
  
  static defaultProps={
        country :"in",
        pageSize: 8
  }
  
  constructor(){
    super();
    this.state ={
      articles :[],
      loading :false,
      page: 1
    }
  }
 async componentDidMount(){
  
   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2521bb24557480cab447a238db8fd9a&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
   let parseData =await data.json();
    console.log(parseData); 
    this.setState({articles :parseData.articles,totalResults:parseData.totalResults})    }

    handprev = async()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2521bb24557480cab447a238db8fd9a&page=${this.state.page-1}&pageSize=${this.props.pageSize} `;
  
      let data = await fetch(url);
     let parseData =await data.json();
      console.log(parseData); 
      this.setState({articles :parseData.articles})    
  
        this.setState({
          page:this.state.page-1
         })
     
    }
     
    handnext = async()=>{

      if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
else{
  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2521bb24557480cab447a238db8fd9a&page=${this.state.page+1}&pageSize=${this.props.pageSize} `;
  let data = await fetch(url);
 let parseData =await data.json();
  console.log(parseData); 
  this.setState({articles :parseData.articles})    

    this.setState({
      page:this.state.page+1
     })
}
     
    }
  render() {
    
    return (
  <div className="container my-3">
        <h2 className="text-center">News Headlines</h2>
      
     <div className="row">
     {this.state.articles.map((element)=>{

       return <div className="col-md-4" key={element.url}>
               <Item title={element.title?element.title:""} 
               descrip={element.description?element.description:""} urle={element.urlToImage} newrl={element.url} author={element.author} date={element.publishedAt}
               source={element.source.name}></Item>
          </div>


     })}
         
         
     </div>    
      <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handprev}> &larr; Previous</button>  
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handnext}>Next &rarr;</button>
    
      </div>
   </div>
    )
  }
}

export default News

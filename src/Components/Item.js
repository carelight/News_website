import React, { Component } from 'react'



export class Item extends Component {
  render() {
    let {title,descrip,urle,author,date,newrl,source}=this.props;
   
    return (
    <div className="my-3">
         <div className="card" >
         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{source}</span>
            <img className="card-img-top" src={!urle?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":urle} alt="..."/>
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
            <p className="card-text">{descrip}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
               <a href={newrl} className="btn btn-sm btn-primary">Read More</a>
     </div>
    </div>
</div>
    )
  }
}

export default Item

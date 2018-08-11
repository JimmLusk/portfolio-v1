import React from 'react';
import './styles/Project.css';

class Project extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected : undefined,
    }
  }

  render() {
    return (
      <section className="project">
        <img className="hero" src={this.props.hero} alt={this.props.title}/>
        <article>
          <h2>{this.props.title}</h2>
          <h5>{this.props.techString}</h5>
          <p>{this.props.description}</p>
        </article>
        <div className="links">
          {
            this.props.links.live ? 
            <a href={this.props.links.live} target="_blank">Live&nbsp;App </a>
            : undefined 
          }
          { 
            this.props.links.frontRepo ? 
            <a href={this.props.links.frontRepo} target="_blank"> Front&#8209;End&nbsp;Repo</a>
            : undefined
          }
          {
            this.props.links.backRepo ? 
            <a href={this.props.links.backRepo} target="_blank"> Back&#8209;End&nbsp;Repo</a>
            : undefined 
          }
          {
            this.props.links.mainRepo ? 
            <a href={this.props.links.mainRepo} target="_blank"> Project&nbsp;Repo</a>
            : undefined 
          }
          {
            this.props.links.documentation ? 
            <a href={this.props.links.documentation} target="_blank">Docs</a>
            : undefined 
          }
        </div>
      </section>
    );
  }
}

export default Project;
import React, { Component } from 'react';

class Container extends Component {
  render() {
    const { name, belt, image } = this.props.participant;
    const className = `belt ${belt}`;

    const { children } = this.props;

    return (
      <div className="mdl-cell mdl-cell--4-col">
        <div className="profile">
          <div className="avatar">
            <div className="image">
              <div className={className} />
              <img src={image} />
            </div>
            <div className="name">{name}</div>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default Container;
import React from 'react';
require('style/blocks.styl');

/*
* BlockContainer
*/
export class BlockContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }
  
  getChildContext() {
    let blocks = {
      columns: this.props.columns,
      rowHeight: this.props.rowHeight
    };
    
    if (blocks.columns === 'auto' && this.state.width) {
      blocks.columns = Math.floor(this.state.width / this.props.minBlockWidth);
    }
    
    return {blocks};
  }
  
  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize.bind(this));
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize.bind(this));
  }
  
  updateSize() {
    this.setState({width: this.refs.container.offsetWidth});
  }

  render() {
    return (
      <div ref="container" className="blocks-container">
        {this.props.children}
      </div>
    );
  }
  
}

BlockContainer.childContextTypes = {
  blocks: React.PropTypes.object
};

BlockContainer.propTypes = {
  columns: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  rowHeight: React.PropTypes.number,
  minBlockWidth: React.PropTypes.number
};

BlockContainer.defaultProps = {
  columns: 12,
  rowHeight: 10,
  minBlockWidth: 150
};

/*
* Block
*/

export class Block extends React.Component {  
  render() {
    const options = this.context.blocks;
    if (!options) {
      console.warn('Warning: A Block exists which does not belong inside a BlockContainer');
      return null;
    }
    if (typeof options.columns !== 'number') {
      return null;
    }
    
    const {children, style, className, ...other} = this.props;
    const blockStyle = {
      ...style,
      width: 100 / options.columns * this.props.width + '%',
      height: options.rowHeight * this.props.height + 'px'
    };
    
    return (
      <div className={`blocks-block ${className || ''}`} style={blockStyle} {...other}>
        {children}
      </div>
    );
  }  
}

Block.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};

Block.defaultProps = {
  width: 1,
  height: 1
};

Block.contextTypes = {
  blocks: React.PropTypes.object.isRequired
};

import React from 'react';
require('style/smartgrid.styl');

class GridSolver {
  constructor(cols) {
    this.cols = cols;
    this.grid = [];
  }

  findPos(width, height) {
    const cols = this.cols;
    if (width > this.cols) {
      console.error('Tried to allocate a cell wider than the container');
      return;
    }

    for (let y = 0; y < 100000; y++) {
      for (let x = 0; x <= cols - width; x++) {
        let fits = true;
        let ptrs = [];
        for (let x2 = 0; x2 < width; x2++) {
          for (let y2 = 0; y2 < height; y2++) {
            let ptr = (x + x2) + (y + y2) * cols;
            if (this.grid[ptr]) {
              fits = false;
            } else {
              ptrs.push(ptr);
            }
          }
        }
        if (fits) {
          ptrs.forEach((x) => {
            this.grid[x] = true
          });
          return {col: x, row: y};
        }
      }
    }
  }
}

export default class SmartGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize.bind(this));
  }

  updateSize() {
    this.setState({width: this.refs.container.clientWidth});
  }

  render() {
    if (this.state.width >= this.props.minChildSize) {
      let children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

      const noOfCols = Math.floor(this.state.width / this.props.minChildSize) + 1;
      const unitSize = this.state.width / noOfCols;
      let solver = new GridSolver(noOfCols);
      children = children.map((el) => {
        let elW = el.props.size === '4' ? 4 : ['2', '3', '4'].includes(el.props.size) ? 2 : 1
        let elH = ['3', '4'].includes(el.props.size) ? 2 : 1
        if (elW > noOfCols) {
          elW = noOfCols;
          elH = noOfCols;
        }
        let pos = solver.findPos(elW, elH);
        if (!pos) {
          console.log('nopos')
          pos = {col: 220, row: 1}
        }

        let style = el.props.style || {};
        style.width = (elW * unitSize) + 'px';
        style.height =(elH * unitSize) + 'px';
        style.left = (pos.col * unitSize) + 'px';
        style.top = (pos.row * unitSize) + 'px';
        let key = el.props.key || el.props.id || Math.random();
        return React.cloneElement(el, {style, key});
      });

      return (
        <div ref="container" className="smartgrid">
          {children}
        </div>
      );
    }

    return (
      <div ref="container">
        {this.props.children}
      </div>
    );
  }

}

SmartGrid.defaultProps = {
  minChildSize: 150
};

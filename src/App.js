import React, {Component} from 'react';
import {AutoSizer, List, CellMeasurer, CellMeasurerCache} from 'react-virtualized';

const ScreenInfo = ({width, height}) => (<span>width: {width} height: {height}</span>);

class App extends Component {

    constructor(props) {
        super(props);
        this.cache = new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 50
        });
    }
    renderRow = ({key, isScrolling, parent, style, index}) => {
        return (
        <CellMeasurer
            key={key}
            cache={this.cache}
            parent={parent}
            columnIndex={0}
            rowIndex={index}
        >
            <div style={style} >
                name: {this.props.data[index].name}
                email: {this.props.data[index].email}
                height: <div style={{height: `${this.props.data[index].randomHeight}px`}}>{this.props.data[index].randomHeight}px</div>
            </div>
        </CellMeasurer>
        );
    };

    render() {
        return (
            <AutoSizer>
                {({width, height}) => {
                    return (
                        <div>
                            <ScreenInfo width={width} height={height}/>
                            <List
                                rowCount={this.props.data.length}
                                deferredMeasurementCache={this.cache}
                                rowHeight={this.cache.rowHeight}
                                rowRenderer={this.renderRow}
                                width={width}
                                height={height}
                            />

                        </div>
                    );
                }}
            </AutoSizer>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {AutoSizer, List} from 'react-virtualized';

const ScreenInfo = ({width, height}) => (<span>width: {width} height: {height}</span>);

class App extends Component {

    renderRow = ({key, isScrolling, style, index}) => {
        return (
            <div style={style} key={key}>
                name: {this.props.data[index].name}
                email: {this.props.data[index].email}
            </div>
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
                                rowHeight={50}
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

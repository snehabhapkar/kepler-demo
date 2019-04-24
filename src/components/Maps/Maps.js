import React, {Component} from 'react';
import { ReactReduxContext } from 'react-redux'
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import KeplerGl from 'kepler.gl';

const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line
const emptyTheme = {};
class App extends Component {

  render() {
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <div style={{position: 'absolute', width: '100%', height: '100%'}}>
          <AutoSizer>
            {({height, width}) => (
              <KeplerGl
                mapboxApiAccessToken={MAPBOX_TOKEN}
                id="map"
                width={width}
                height={height}
                store={store}
                theme={emptyTheme}
              />
            )}
          </AutoSizer>
        </div>
        )}
      </ReactReduxContext.Consumer>

    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default withRouter(connect(mapStateToProps, dispatchToProps)(App));

import React from 'react';
const createClass = require('create-react-class');

var Title = createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});

var Poster = createClass({
    render: function () {
        return (
            <img src={this.props.poster} alt="poster" style={{ width: "300px", height: "300px", border: "1px solid gray" }} />
        );
    }
});

var Plot = createClass({
    render: function () {
        return (
            <p>{this.props.plot}</p>
        );
    }
});

var IMDBRating = createClass({
    render: function () {
        return (
            <h3>{this.props.imdbRating}</h3>
        );
    }
});

var Show = createClass({
    getDefaultProps: function () {
        return ({
            index: 0
        });
    },
    getInitialState: function () {
        return ({
            index: this.props.index
        });
    },
    handleClick: function () {
        var length= this.props.showApp.length;
        this.setState(function (prevState) {
            return ({
                index: (prevState.index + 1) % length
            });
        });
    },
    render: function () {
        var showApp = this.props.showApp[this.state.index];
        return (
            <div>
                <Title title={showApp.title} />
                <Poster poster={showApp.poster} />
                <Plot plot={showApp.plot} />
                <IMDBRating imdbRating={showApp.imdbRating} />
                <button onClick={this.handleClick}>next</button>
            </div>
        );
    }
});

export default Show;
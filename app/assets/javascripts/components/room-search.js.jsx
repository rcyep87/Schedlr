var Search = React.createClass({
    getDefaultProps: function() {
      return {
        rooms: []
      };
    },

    getInitialState: function() {
      return {
        rooms: [],
        search: ''
      };
    },

    handleChange: function(event) {
      var matched_rooms = this.props.rooms.filter(function (room) {
        return (room.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
      });
      this.setState({
        search: event.target.value,
        rooms: matched_rooms
      });
    },

    render: function() {
      return (<section>
          <p>
            <input className='form-control' type='text'
            onChange={this.handleChange} value={this.state.search}
            placeholder='search rooms' />
          </p>
          {this.state.rooms.map(function (room) {
            return (room.name);
          })}
      </section>);
  }
});

//static file using express 
//var express = require('express');
//var path = require('path');
//var app = express();

// Define the port to run on
//app.set('port', 3000);

//app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
//var server = app.listen(app.get('port'), function() {
  //var port = server.address().port;
  //console.log('Magic happens on port ' + port);
//});
class Breeds extends React.Component {
  
    constructor() {
      super();
      this.state = {
        breeds: []
      };
    }
  
    componentWillMount() {
      axios.get('/api/breeds')
        .then((response) => {
          console.log(response.data)
          this.setState({
            breeds: response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      let breeds = this.state.breeds.map( (book) => {
        return <li key={breeds._id}>{ breeds.title }</li>
      });
      
      return (
        <ul>
          { breeds }
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <Breeds />,
    document.getElementById('breeds')
  );
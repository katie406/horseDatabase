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
class BreedsList extends React.Component {
  
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
      let breeds = this.state.breeds.map( (breeds) => {
        return <li key = {breeds._id}>{ breeds.name }</li>
      });
      
      return (
        <ul>
          { breedsItems }
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <BreedsList />,
    document.getElementById('breeds')
  );
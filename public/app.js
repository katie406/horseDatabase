class BreedsList extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        breeds: []
      };
    }
  //React 
    componentWillMount() {
      axios.get('/api/breeds')
        .then((response) => {
          console.log(response)
          this.setState({
            breeds: response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      let breedsItems = this.state.breeds.map( (breed) => {
        return <li key={ breed._id }>{ breed.name }</li>
      });
      
      return (
        <ul>
          { breedsItems }
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <BreedsList/>,
    document.getElementById("breeds")
  );
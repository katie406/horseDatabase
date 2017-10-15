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
            breeds: response
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      let breedsItems = this.state.breeds.map( (breeds) => {
        return <li>{ breed.name }</li>
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
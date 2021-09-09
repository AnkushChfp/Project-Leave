import React from 'react';


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/?format=json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
        console.log(this.state.items)
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ol>
            {items.map(item => (
              <li key={item.id}>
                <ul>
                    <li>{item.title}</li>
                    <li>{item.reason}</li>
                    <li>{item.fromDate}</li>
                    <li>{item.toDate}</li>
                </ul>
              </li>
            ))}
          </ol>
        );
      }
    }
  }

  export default MyComponent;
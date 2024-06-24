import axios from "axios";
import React from "react";


export class FetchData extends React.Component {
  state = {
    posts:[],
    error:''
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount ");
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({
          posts: res.data
        });
        console.log(res);
      })
      .catch((error) => {
        this.setState({
            error:`Error Occured ${error}`
        });
        console.log(error);
      });
  }

  getdata = () => {
    console.log("get Data ");
    // Example code if you need to fetch data on button click in the future
    /*
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // Handle data here if needed
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    */
  }

  render() {
    const {posts} = this.state;
    return (
      <>
        <div> Axios hands-on.. </div>
        <button onClick={this.getdata}> FetchData</button>
        <div>List of Dummy JSON Data:</div>
        {
            posts.length > 0 ?
            (        
          posts.map(post => (
            <div key={post.id}>{`UserId:${post.id}  | ${post.title} ` } </div>
          ))
        ):(<div>{this.state.error}</div>) 
        
        }
      </>
    );
  }
}
export default FetchData;
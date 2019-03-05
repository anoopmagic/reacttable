import React , {Component} from 'react'
import axios from 'axios'
class Data extends Component
{
 
  state = {
      posts:[]
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
          console.log(res);
          this.setState({
            posts:res.data.slice(0  , 5)
          })
      })
  }
  render(){
      const {posts} = this.state;
      const postList = posts.length ?
       (
        posts.map(post => {
              return (
                   
                           <tr key={post.id}>
                               <td>{post.id}</td>
                               <td>{post.name}</td>
                               <td>{post.phone}</td>
                               <td>{post.username}</td>
                               <td>{post.website}</td>
                               <td>
                                   <a href="javascript:void(0)" class="edit_btn btn">Edit</a>
                                   <a href="javascript:void(0)" class="edit_btn btn">Save</a>
                                   <a href="javascript:void(0)" class="edit_btn btn">Cancel</a>
                                   <a href="javascript:void(0)" class="edit_btn btn">Delete</a>
                               </td>
                           </tr>

                     
              )
          })
      ) : (
        <p>No post yet</p>
      )
      return(
        <div>
          <div className="twrapper">
              <table>
                       <thead>
                           <tr>
                               <th>id</th>
                               <th>name</th>
                               <th>phone</th>
                               <th>username</th>
                               <th>website</th>
                               <th>Action</th>
                             </tr>
                       </thead>
                       <tbody>
              {postList}
              </tbody>
                   </table>
          </div>
        <div className="add-wrapper">
          <a href="javascript:void(0)" className="btn addbtn">Add</a>
          </div>
          </div>
      )
  } 
}
export default Data;
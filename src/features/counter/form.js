import React , {Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            username:'',
            comments:'',
            topic:'react'
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })

    }
    handleCommentChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.topic} ${this.state.comments} `)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
              <div >
                <label  > Username  </label>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUsernameChange} />
                
              </div>
              <div>
              <label  > comments  </label>
              <textarea
                value={this.state.comments}
                onChange={this.handleCommentChange}></textarea>
              </div>
              <div >
                <label  > Topic  </label>
                <select value={this.state.topic}
                  onChange={this.handleTopicChange}>
                    <option value='react'> React </option>
                    <option value='angular'> angular </option>
                    <option value='vue'> vue </option>

                </select>
              </div>
              <button tupe='submit'>Submit</button>
            </form>
        )
    }
}

export default Form

//for="uname"
//id="uname" name="uname"     
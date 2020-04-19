import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: "",
    author: ""
  }

  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    let quote = this.state
    quote.id = uuid()
    quote.votes = 0
    this.props.dispatch(addQuote(quote))
    this.setState({
      content: "",
      author: ""
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(e) => this.handleOnSubmit(e)} >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        name = "content"
                        onChange = {(e) => this.handleOnChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name = "author"
                        onChange = {(e) => this.handleOnChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapDispatchToProps = dispatch => {
  return {dispatch: (action) => { dispatch(action)}}
}
export default connect(null,mapDispatchToProps)(QuoteForm);

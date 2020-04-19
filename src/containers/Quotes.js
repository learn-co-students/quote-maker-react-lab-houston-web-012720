import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard'
import {removeQuote , upvoteQuote , downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => 
                <QuoteCard 
                  quote = {quote} 
                  upvoteQuote = {this.props.upvoteQuote}
                  downvoteQuote = {this.props.downvoteQuote}
                  removeQuote = {this.props.removeQuote}
                  key = {quote.id}
                />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return{quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id)),
    removeQuote: (id) => dispatch(removeQuote(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

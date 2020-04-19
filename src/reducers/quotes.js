export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state , action.quote]
    
    case "REMOVE_QUOTE": 
      let removeQuote = state.find(quote => quote.id === action.quoteId)
      state.splice(state.indexOf(removeQuote),1)
      return state

    case "UPVOTE_QUOTE":
      let upQuote = state.find(quote => quote.id === action.quoteId)
      state[state.indexOf(upQuote)].votes += 1
      return state

    case "DOWNVOTE_QUOTE":
      let downQuote = state.find(quote => quote.id === action.quoteId)
      if(downQuote.votes > 0){
        state[state.indexOf(downQuote)].votes -= 1
      }
      return state

    default:
      return state
  }
}

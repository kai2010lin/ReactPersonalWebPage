var React = require('react');
var ReactDom = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return{
      title: 'Error'
    }
  },

  propTypes: {
    title: React.PropTypes.string,
    Message: React.PropTypes.string.isRequired
  },

  componentDidMount: function(){
    var errorMessage = this.props.errorMessage;
    var modalMarkUp = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{errorMessage}</p>
        <p>
          <button className="button" data-close="">
            OK
          </button>
        </p>
      </div>
    );
    
    var $modal = $(ReactDOMServer.renderToString(modalMarkUp));
    $(ReactDom.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },

  render: function(){
    return(
      <div></div>
    )}
});

module.exports = ErrorModal;

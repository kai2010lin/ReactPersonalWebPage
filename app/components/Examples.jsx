var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are few examples</p>
        <ol>
          <li>
            <Link to='/?number=1'>No.1 Pokemon</Link>
          </li>
          <li>
            <Link to='/?number=2'>No.2 Pokemon</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;

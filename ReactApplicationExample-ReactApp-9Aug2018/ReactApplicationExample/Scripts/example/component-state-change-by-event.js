const numbers_init = ['Home', 'Profile'];
const numbers_change = ['Message', 'About', 'Help'];

var rootElement = React.createClass({

    getInitialState: function () {
        debugger;
        return { data: numbers_init  };
    },
    getItems: function () {
        var items = [];
        var atemp = this.state.data;
        for (var i = 0; i < atemp.length; i++) {
            items.push(this.getItem(atemp[i]));
        }
        return items;
    },
    getItem: function (label) {
        return (React.DOM.li({ role: "presentation" },
            React.DOM.a({ href: "#" }, label)
        )
        );
    },
    handleClick: function (e) {
        this.setState({ data:  numbers_change });
        alert('state change');
    },
    render: function () {
        debugger;
        return React.DOM.div({ className: "col-md-4" },
            React.DOM.div({
                className: 'form-group'
            }, React.DOM.label({
                htmlFor: 'txtName'
            }, 'Enter Name'),
                React.DOM.input({ id: 'txtName', className: 'form-control' })),
            React.DOM.br(),
            React.DOM.ul({ className: 'nav nav-pills nav-stacked' },
                this.getItems()),
            React.DOM.br(),
            React.DOM.div(null, React.DOM.div({
                className: 'btn btn-primary', onClick: this.handleClick
            }, "Submit")
            )
        );
    }
});
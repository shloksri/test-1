import FocusTrap from "focus-trap-react";

const React = require('react');

const container = document.getElementById('demo-defaults');

export default class DemoDefaults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTrap: false,
        };

        this.mountTrap = this.mountTrap.bind(this);
        this.handleEscape = this.handleEscape.bind(this);
        this.unmountTrap = this.unmountTrap.bind(this);
    }

    mountTrap() {
        this.setState({ activeTrap: true });
    }

    unmountTrap() {
        this.setState({ activeTrap: false });
    }

    handleEscape(e) {
        if (e.key === "Escape") {
            console.log("Escape pressed in FocusTrap");
            this.setState({ activeTrap: false });
        }
    }

    render() {
        const trap = this.state.activeTrap && (
            <FocusTrap

            >
                <div onKeyDown={this.handleEscape} className="trap is-active">
                    <p>
                        Here is a focus trap <a href="#">with</a> <a href="#">some</a>{' '}
                        <a href="#">focusable</a> parts.
                    </p>
                    <p>
                        <button
                            onClick={this.unmountTrap}
                            aria-describedby="defaults-heading"
                        >
                            deactivate trap
                        </button>
                    </p>
                </div>
            </FocusTrap>
        );

        return (
            <React.StrictMode>
                <div>
                    <p>
                        <button onClick={this.mountTrap} aria-describedby="defaults-heading">
                            activate trap
                        </button>
                    </p>
                    {trap}
                </div>
            </React.StrictMode>
        );
    }
}

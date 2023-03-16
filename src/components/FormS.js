// import React from "react";
// import FocusTrap from "focus-trap-react";


// export default function FormS() {
//     const [isOpen, setIsOpen] = React.useState(false);
//     function open() {
//         setIsOpen(true);
//     }
//     function close() {
//         setIsOpen(false);
//     }
//     return (
//         <React.StrictMode>
//             <div className="App">
//                 <pre>state: {isOpen.toString()}</pre>
//                 <p>
//                     Click the open button while the state is <code>true</code>
//                 </p>
//                 <button onClick={open}>Open</button>
//                 {isOpen && (
//                     <FocusTrap
//                         active={isOpen}
//                         focusTrapOptions={{
//                             clickOutsideDeactivates: true,

//                         }}
//                     >
//                         <div>
//                             <button onClick={close}>Go away</button>
//                             <button onClick={close}>Go away</button>
//                             <button onClick={close}>Go away</button>
//                             <button onClick={close}>Go away</button>
//                         </div>
//                     </FocusTrap>
//                 )}
//             </div>
//         </React.StrictMode>
//     );
// }
import FocusTrap from "focus-trap-react";

const React = require('react');
// const { createRoot } = require('react-dom/client');
// const FocusTrap = require('../../dist/focus-trap-react');



// const container = document.getElementById('demo-special-element');

export default class DemoSpecialElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTrap: false,
            passThruMsg: '',
        };

        this.mountTrap = this.mountTrap.bind(this);
        this.unmountTrap = this.unmountTrap.bind(this);
        this.updatePassThruMsg = this.updatePassThruMsg.bind(this);
    }

    mountTrap() {
        this.setState({ activeTrap: true, passThruMsg: '' });
    }

    unmountTrap() {
        this.setState({ activeTrap: false });
    }

    updatePassThruMsg() {
        this.setState({ passThruMsg: 'Clicked!' });
    }

    render() {
        let trapClass = 'trap';
        if (this.state.activeTrap) {
            trapClass += ' is-active';
        }

        return (
            <React.StrictMode>
                <div>
                    <p>
                        <button
                            onClick={this.mountTrap}
                            aria-describedby="special-element-heading"
                        >
                            activate trap
                        </button>
                        <button onClick={this.updatePassThruMsg}>pass thru click</button>
                        <span>{this.state.passThruMsg}</span>
                    </p>

                    <FocusTrap
                        active={this.state.activeTrap}
                        focusTrapOptions={{
                            onDeactivate: this.unmountTrap,
                            clickOutsideDeactivates: true,
                            returnFocusOnDeactivate: true,
                        }}
                    >
                        <section
                            id="focus-trap-three"
                            style={this.state.activeTrap ? null : { background: '#eee' }}
                            data-whatever="nothing"
                            className={trapClass}
                        >
                            <p>
                                Here is a focus trap <a href="#">with</a> <a href="#">some</a>{' '}
                                <a href="#">focusable</a> parts.
                            </p>
                            <p>
                                <button
                                    onClick={this.unmountTrap}
                                    aria-describedby="special-element-heading"
                                >
                                    deactivate trap
                                </button>
                            </p>
                        </section>
                    </FocusTrap>
                </div>
            </React.StrictMode>
        );
    }
}

// const root = createRoot(container);
// root.render(<DemoSpecialElement />);
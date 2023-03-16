import React from 'react'

const Modal = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">
                        Are you sure you want to submit?
                    </h4>
                </div>

                <div className='modal-footer'>
                    <button className='modal-btn' onClick={props.onClickYes} autoFocus>Yes</button>
                    <button className='modal-btn' onClick={props.onClose}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
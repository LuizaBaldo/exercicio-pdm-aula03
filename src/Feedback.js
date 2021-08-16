import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Feedback = (props)  => {
    return(
        <div className="d-flex justify-content-evenly m-2">
            <button
                type="button"
                onClick={props.funcaoAprovado}
                className="btn btn-primary">
                    <i className="fas fa-thumbs-up"></i>
            </button>
            <button
                type="button"
                onClick={props.funcaoReprovado}
                className="btn btn-danger">
                    <i class="fas fa-thumbs-down"></i>
            </button>
        </div>
    )
}

export default Feedback
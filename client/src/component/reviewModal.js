import React, { Component } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '20%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class reviewModal extends Component {

    render() {
        return (
            <div>
                <Modal
                    style={customStyles}
                    isOpen={this.props.isOpen}
                    ariaHideApp={false}
                >
                    <h3 style={{marginBottom:"10px"}}>Review Data</h3>
                    <form className="from-group">
                        <label style={{marginBottom:"0px"}}>Title</label>
                        <input style={{marginTop: "5px"}}name="title" className="form-control" value={this.props.item ? (this.props.item.title||"") : ""} type="text" readOnly></input>
                        <label style={{marginBottom:"0px"}}>Fakultas</label>
                        <input style={{marginTop: "5px"}}name="fakultas" className="form-control" value={this.props.item ? (this.props.item.fakultas||"") : ""} type="text" readOnly></input>
                        <label style={{marginBottom:"0px"}}>Departemen</label>
                        <input style={{marginTop: "5px"}}name="departemen" className="form-control"value={this.props.item ? (this.props.item.departemen||"") : ""} type="text" readOnly></input>
                        <label style={{marginBottom:"0px"}}>URL</label>
                        <input style={{marginTop: "5px"}}name="url" className="form-control" value={this.props.item ? (this.props.item.url||"") : ""} type="text" readOnly></input>
                        <label style={{marginBottom:"0px"}}>Nama File</label>
                        <input style={{marginTop: "5px"}}name="file_name" className="form-control" value={this.props.item ? (this.props.item.file_name||"") : ""} type="text" readOnly></input>
                    </form>
                    <div style={{marginTop:"10px",textAlign:"center", display:"inline-block", width:"100%"}}>
                        <button style={{marginLeft: "20px"}}onClick={this.props.toggleReview} className="btn btn-success col-sm-2">Ok</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

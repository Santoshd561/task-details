import React, { Component } from "react";
import { Modal, Button } from "antd";
import EditDetailsForm from "./EditDetailsForm";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showUndo: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleSubmit = (id, data) => {
    this.setState({
      visible: false,
      showUndo: true
    });
    this.startUndoTimer();
    this.props.handleUpdate(id, data);
  };
  startUndoTimer = () => {
    setTimeout(() => {
      this.setState({ showUndo: false });
    }, 10000);
  };
  render() {
    const { editContent } = this.props;
    console.log(this.props.editContent);
    return (
      <div
        style={{
          width: 800,
          height: 600,
          padding: 20,
          marginLeft: 80
        }}
      >
        {!this.props.editContent && (
          <h1>CLICK ANY RECORD TO SEE THE DETAILS</h1>
        )}
        {this.props.editContent && (
          <div className="details">
            <h1 style={{ backgroundColor: "tomato" }}>DETAILS</h1>
            <div className="header">
              <h2>Name: </h2>
              <h2>{editContent.full_name}</h2>
            </div>
            <div className="header">
              <h2>Email: </h2>
              <h2> {editContent.email}</h2>
            </div>
            <div className="header">
              <h2>Phone: </h2>
              <h2>{editContent.mobile}</h2>
            </div>
            <div className="header">
              <h2>AADHAR: </h2>
              <h2>{editContent.adhar_number}</h2>
            </div>
            <div className="header">
              <h2>PAN: </h2>
              <h2>{editContent.pan_number}</h2>
            </div>
            <div style={{ display: "flex" }}>
              {this.props.editContent && (
                <Button style={{ marginLeft: 20 }} onClick={this.showModal}>
                  Edit
                </Button>
              )}
              {this.state.showUndo && (
                <Button
                  onClick={() => {
                    this.setState({ showUndo: false });
                    this.props.handleUndo(editContent.id);
                  }}
                >
                  Undo
                </Button>
              )}
            </div>
          </div>
        )}
        <Modal
          title="Update"
          visible={this.state.visible}
          maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
          onCancel={this.handleCancel}
          className="loginwrapper"
          footer={null}
        >
          <EditDetailsForm
            data={editContent}
            handleUpdate={this.props.handleUpdate}
            handleSubmit={this.handleSubmit}
          />
        </Modal>
      </div>
    );
  }
}
export default Details;

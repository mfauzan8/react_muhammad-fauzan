import "../App.css";
import React from "react";

class ListTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.completed) {
      return (
        <>
          <div className="list">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={this.props.handleTaskStatus} checked />
              <label className="form-check-label complete" for="flexCheckDefault">
                {this.props.title}
              </label>
            </div>
            <button className="btnHapus" onClick={this.props.deleteTask}>
              Hapus
            </button>
          </div>
          <hr></hr>
        </>
      );
    }
    return (
      <>
        <div className="list">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={this.props.handleTaskStatus} />
            <label className="form-check-label" for="flexCheckDefault">
              {this.props.title}
            </label>
          </div>
          <button className="btnHapus" onClick={this.props.deleteTask}>
            Hapus
          </button>
        </div>
        <hr></hr>
      </>
    );
  }
}

export default ListTask;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h3>
                {name}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    });
                  }}
                  style={{ cursor: "pointer" }}
                  className="fas fa-sort-down"
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  className="fas fa-times"
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "blue",
                      marginRight: "1rem",
                    }}
                  />
                </Link>
              </h3>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;

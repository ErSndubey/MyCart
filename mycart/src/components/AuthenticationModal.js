import React from 'react';

const AuthenticationModal = ({ showModal, closeModal, handleAuthentication }) => {
  return (
    <div className={`modal ${showModal ? 'block' : 'hidden'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Authentication</h5>
            <button type="button" className="close" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            {/* Authentication form, login/register options */}
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleAuthentication}>
              Authenticate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationModal;

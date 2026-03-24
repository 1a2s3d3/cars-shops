import React from "react";

function FormCard({ title, subtitle, buttonText, onSubmit, children }) {
  return (
    <div className="login-page">
      <div className="login-card shadow-lg">
        <h1 className="text-center-1 capacs-logo mb-3">CaPacs</h1>
        <p className="text-center-2 mb-4">{title}</p>

        {subtitle && <p className="text-center mb-3">{subtitle}</p>}

        <form onSubmit={onSubmit}>
          {children}

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-danger">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCard;
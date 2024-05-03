import "../styles/ErrorMsg.css";

export default function ErrorMsg({ error, setError }) {
  return (
    <>
      {error ? (
        <div className="error-container">
          <span className="material-icons-round icon-left">error_outline</span>
          <p className="error-msg">{error}</p>
          <span
            className="material-icons-round icon-right"
            onClick={() => setError(null)}
          >
            close
          </span>
        </div>
      ) : null}
    </>
  );
}

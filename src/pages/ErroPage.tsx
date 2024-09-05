
import { Link, useRouteError } from 'react-router-dom';

interface RouteError {
  status: number;
  statusText: string;
}

const ErrorPage = () => {
  const err = useRouteError() as RouteError;

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">{err.status}</h1>
        <p className="error-message">{err.statusText}</p>
        <Link to="/" className="error-link">Go back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;

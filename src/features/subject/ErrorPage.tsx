import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>發生錯誤</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    );
  }
  return <div>Oops</div>;
}

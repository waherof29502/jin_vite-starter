import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>router出事拉!!</h1>
        <p>發生錯誤</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    );
  }
  return <div>出事拉!!</div>;
}

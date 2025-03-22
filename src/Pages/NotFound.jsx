function NotFound() {
  return (
    <div className="d-flex alitgn-items-center justify-content-center h-100 bg-light">
      <div className="card shadow-lg p-4 border-0" style={{ width: '1000px' }}>
        <div className="card-body text-center">
          <h1 className="display-4 text-danger fw-bold">404</h1>
          <h3 className="mb-3">Page Not Found</h3>
          <p className="text-muted">Sorry, we can't find the page you are looking for.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

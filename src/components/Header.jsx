
function Header({ total, completed, pending }) {
  return (
    <header className="header">
      <h1>
        <span aria-hidden="true">📝</span> Professional Todo App
      </h1>

      <div className="stats" aria-label="Todo statistics">
        <p>
          Total: <strong>{total}</strong>
        </p>

        <p>
          Completed: <strong>{completed}</strong>
        </p>

        <p>
          Pending: <strong>{pending}</strong>
        </p>
      </div>
    </header>
  );
}

export default Header;

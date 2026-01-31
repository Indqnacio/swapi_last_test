import "./dialog.scss";

export default function Dialog({ open = false, title = "", children, onClose = () => {} }) {
  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-panel" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h3>{title}</h3>
          <button className="dialog-close" onClick={onClose}>×</button>
        </div>
        <div className="dialog-body">{children}</div>
      </div>
    </div>
  );
}

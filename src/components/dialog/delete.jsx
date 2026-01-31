// components/dialogs/DeleteDialog.jsx
import "./dialog.scss";
import BaseDialog from "./BaseDialog";

export default function DeleteDialog({
  open,
  title = "Confirmar eliminación",
  description,
  entityLabel,
  onCancel,
  onConfirm,
}) {
  return (
    <BaseDialog
      open={open}
      title={title}
      onClose={onCancel}
      footer={
        <>
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Eliminar
          </button>
        </>
      }
    >
      <p>
        {description ||
          <>¿Estás seguro que deseas eliminar <strong>{entityLabel}</strong>?</>
        }
      </p>
    </BaseDialog>
  );
}

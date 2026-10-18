export function getErrorMessage(error) {
  if (!error) {
    return "An unexpected error occurred.";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error.detail) {
    if (Array.isArray(error.detail)) {
      return error.detail.map((e) => (e && e.msg) || String(e)).join(", ");
    }
    return String(error.detail);
  }
  if (error.message) {
    return String(error.message);
  }
  return "An unexpected error occurred.";
}

export function hideModal(id) {
  const el = document.getElementById(id);
  if (!el || !window.bootstrap) return;
  const instance = window.bootstrap.Modal.getInstance(el);
  if (instance) {
    instance.hide();
  } else {
    new window.bootstrap.Modal(el).hide();
  }
}

export function showModal(id) {
  const el = document.getElementById(id);
  if (!el || !window.bootstrap) return;
  const instance = window.bootstrap.Modal.getInstance(el);
  if (instance) {
    instance.show();
  } else {
    new window.bootstrap.Modal(el).show();
  }
}

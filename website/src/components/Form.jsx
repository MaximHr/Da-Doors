import { useState } from "react";
import { X, Phone, Shield } from "lucide-react";
import { submitRequest } from "../api";
import { toast } from "react-toastify";

const Form = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    doorType: "",
    size: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await submitRequest(form);

      setForm({
        name: "",
        phone: "",
        email: "",
        doorType: "",
        size: "",
        city: "",
        message: "",
      });
			onClose();
			
			toast.success("Запитването беше изпратено успешно!");
    } catch (e) {
			toast.error(e.message || "Не успяхме да изпратим запитването.");
		}
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg flex flex-col"
        style={{ borderRadius: "10px", maxHeight: "95vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="px-6 pt-5 pb-4 flex-shrink-0 relative"
          style={{ background: "#3e6ae1", borderRadius: "10px 10px 0 0" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center hover:opacity-90"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "5px",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Close"
          >
            <X
              style={{ stroke: "#fff", opacity: 0.8 }}
              size={16}
              strokeWidth={2.5}
            />
          </button>

          <h2 className="text-white font-semibold tracking-tight m-0 mb-1 pr-10 text-base sm:text-lg">
            Изпрати запитване
          </h2>
          <p className="text-white/90 m-0 text-[11px] sm:text-xs">
            Кажи ни от какво се нуждаеш и ще се свържем с теб до 24 часа
          </p>
        </div>

        <div className="px-5 sm:px-6 pt-4 sm:pt-5 pb-5 sm:pb-6 overflow-y-auto flex-1">
          <div
            className="inline-flex items-center gap-1.5 font-medium px-3 py-1.5 rounded-full mb-4 text-[11px] sm:text-xs"
            style={{ background: "#eef2fd", color: "#3e6ae1" }}
          >
            <Shield size={12} strokeWidth={2} style={{ flexShrink: 0 }} />
            Безплатна консултация
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <Field label="Име">
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Иван Петров"
                  style={inputStyle}
                  className="popup-input"
                />
              </Field>
              <Field label="Телефон">
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="088 444 5555"
                  style={inputStyle}
                  className="popup-input"
                />
              </Field>
            </div>

            <div className="mb-2.5 sm:mb-3">
              <Field label="Имейл">
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ivan@email.com"
                  style={inputStyle}
                  className="popup-input"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <Field label="Тип врата">
                <div className="relative">
                  <select
                    required
                    name="doorType"
                    value={form.doorType}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      paddingRight: "2rem",
                    }}
                    className="popup-input cursor-pointer"
                  >
                    <option value="" disabled>
                      Избери врата
                    </option>
                    <option value="interior">Интериорна</option>
                    <option value="pvc">Входна</option>
                    <option value="entrance">PVC</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="#888"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </Field>
              <Field label="Размер" optional>
                <input
                  type="text"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  placeholder=""
                  style={inputStyle}
                  className="popup-input"
                />
              </Field>
            </div>

            <div className="mb-2.5 sm:mb-3">
              <Field label="Град / Адрес" optional>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  style={inputStyle}
                  className="popup-input"
                />
              </Field>
            </div>

            <div className="mb-4">
              <Field label="Съобщение">
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Опишете вашия проект"
                  rows={3}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    lineHeight: "1.5",
                    minHeight: "68px",
                  }}
                  className="popup-input"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="w-full text-center px-5 py-2.5 rounded-[5px] bg-primary text-white text-sm font-semibold btn-hover transition-colors"
            >
              Поискай оферта
            </button>
          </form>

          <div className="flex items-center gap-2.5 my-3 sm:my-3.5">
            <div className="flex-1 h-px" style={{ background: "#e8ecf5" }} />
            <span className="text-xs" style={{ color: "#bbb" }}>
              или
            </span>
            <div className="flex-1 h-px" style={{ background: "#e8ecf5" }} />
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm">
            <Phone size={14} color="#3e6ae1" strokeWidth={2} />
            Обади ни се:{" "}
            <a
              href="tel:+359882914442"
              className="font-semibold"
              style={{ color: "#3e6ae1", textDecoration: "none" }}
            >
              +359 88 291 4442
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

function Field({ label, optional, children }) {
  return (
    <div>
      <label className="block font-medium mb-1 sm:mb-1.5 uppercase tracking-wide text-[10px] sm:text-[11px]">
        {label}
        {optional && (
          <span
            className="ml-1 normal-case font-normal"
            style={{ color: "#aaa", fontSize: "9px" }}
          >
            незадължително
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px 10px",
  border: "1.5px solid #dde3f0",
  borderRadius: "5px",
  color: "#171a20",
  background: "#fff",
  fontFamily: "inherit",
  outline: "none",
};

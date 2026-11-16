export default function Input({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '8px 12px',
        borderRadius: '8px',
        border: '2px solid #000',
        marginBottom: '12px',
        fontFamily: 'sans-serif',
      }}
    />
  );
}
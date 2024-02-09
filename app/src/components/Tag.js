
export default function Tag({ name, icon }) {
  return (
    <div className="flex items-center space-x-2 px-2 py-1 bg-slate-900 border border-white border-opacity-35 text-white rounded text-sm">
      <span className="material-icons">
        {
            icon && icon
        }
      </span>
      <span>{name}</span>
    </div>
  );
}

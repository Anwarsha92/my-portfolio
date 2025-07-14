// components/Spinner.jsx
export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

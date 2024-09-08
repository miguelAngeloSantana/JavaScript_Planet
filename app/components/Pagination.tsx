export default function Pagination() {
  return (
    <div className="flex justify-between w-full">
      <button className="w-24 border-none p-2 sm:p-4 bg-red-600 text-white cursor-pointer">Previous</button>
      <button className="w-24 border-none p-2 sm:p-4 bg-red-600 text-white cursor-pointer">Next</button>
    </div>
  );
}
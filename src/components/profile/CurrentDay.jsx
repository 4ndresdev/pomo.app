export function CurrentDay() {
  return (
    <div className="bg-white p-2 rounded-lg w-56 border-r-5 border-[#F5A524]">
      <h1 className="text-sm font-semibold">Current Task</h1>
      <p className="text-xs text-clip text-gray-700">
        This is a task that you should be doing right now
      </p>
    </div>
  );
}

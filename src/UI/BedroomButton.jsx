function BedroomButton({ number }) {
  return (
    <button className="w-12 h-12 border-2 border-gray-400 rounded-xl text-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-300">
      {number}
    </button>
  );
}

export default BedroomButton;

import Home from "./components/Home";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-300 py-8 px-4 ">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          AI Image Enhancer{" "}
        </h1>
        <p className="text-lg text-back font-bold">
          Upload your Image and let AI enhance IT.
        </p>
      </div>

      <Home />

      <div className="font-extrabold text-black mt-6">Powered By REACT @AI</div>
    </div>
  );
};

export default App;

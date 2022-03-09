import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="full-screen">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;

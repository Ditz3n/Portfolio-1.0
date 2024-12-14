import { cardio } from 'ldrs';

cardio.register();

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <l-cardio
        size="50"
        stroke="4"
        speed="1.2"
        color={document.body.classList.contains('dark') ? "white" : "#424242"}
      ></l-cardio>
      {/* <p>Loading...</p> // Uncomment for testing */}
    </div>
  );
};

export default LoadingScreen; 
import { useEffect } from "react";

const NotFound = () => {

  useEffect(() => {
    document.title = 'Boniv — 404 Not Found'
  }, []);

  return (
    <div className='notfound'>
      <div className='notfound_container'>
        <h1 className='notfound__title'>Page Not Found!</h1>
        <p className='notfound__subtitle'>
          The page you tried to access is currently unavailable.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

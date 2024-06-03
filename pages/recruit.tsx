import React, { useEffect } from "react";

const Recruit: React.FC = () => {
  useEffect(() => {
    // Create a script element for iframeResizer
    const script = document.createElement('script');
    script.src = "https://opnform.com/widgets/iframeResize.min.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize iframeResizer once the script is loaded
    script.onload = () => {
      // @ts-ignore: ignoring the fact that iframeResize may not exist on window immediately
      window.iFrameResize({ log: false, checkOrigin: false }, "#form-altalancecom-is-hiring-full-stack-devs-mxwyna");
    };

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/80 relative">
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url('")` }}
      ></div>
      <div className="flex justify-center items-center p-4 relative z-10">
        <iframe
          style={{ border: 'none', width: '100%' }}
          id="form-altalancecom-is-hiring-full-stack-devs-mxwyna"
          src="https://opnform.com/forms/altalancecom-is-hiring-full-stack-devs-mxwyna"
        ></iframe>
      </div>
    </div>
  );
};

export default Recruit;

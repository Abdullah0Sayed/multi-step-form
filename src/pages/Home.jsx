import React, { useState } from "react";
import StepOne from "../components/form/StepOne";
import StepTwo from "../components/form/StepTwo";
import ProgressBar from "../components/ui/ProgressBar";
import Review from "../components/form/Review";

const Home = () => {


  const totalSteps = 3;
  let [step , setStep] = useState(1);


   const [formData, setFormData] = useState({
    fullName: "",
    carModel: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const renderStep = () => {
    switch (step) {
      case 1: return <StepOne formData={formData} handleChange={handleChange}/>;
      case 2: return <StepTwo formData={formData} handleChange={handleChange}/>;
      case 3: return <Review formData={formData} />;
      // case 3: return <Step3 formData={formData} handleChange={handleChange} />;
      default: return null;
    }
  };

  return (
    <div className={`w-full min-h-screen flex justify-center items-center `}>
      <div className={`w-1/2 h-3/4 rounded shadow-md p-6 border`}>
        {renderStep()}

        <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            السابق
          </button>
        )}

        {step < totalSteps ? (
          <button
            onClick={() => {
                if(step === 1){
                  if(formData.fullName !== '') {
                    setStep(step + 1)
                  }
                }else if (step === 2) {
                  if(formData.carModel !== '') {
                    setStep(step + 1)
                  }
                }
                 
              
             
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            التالي
          </button>
        ) : (
          <button
            onClick={() => alert("تم التأكيد !")}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            تأكيد
          </button>
        )}
      </div>
      <ProgressBar step={step} totalSteps={totalSteps}/>
      </div>
    </div>
  );
};

export default Home;

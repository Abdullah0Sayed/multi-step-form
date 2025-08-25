import React from 'react'

const StepTwo = ({formData , handleChange}) => {
  return (
    <div className={`w-full flex flex-col gap-4 justify-center items-center`}>
        <p className={`text-3xl font-black`}>معلومات السيارة</p>
        <input
        type="text"
        name="carModel"
        placeholder="أدخل نوع سيارتك"
        value={formData.carModel}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
      />
    </div>
  )
}

export default StepTwo
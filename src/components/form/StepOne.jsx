import React from 'react'

const StepOne = ({formData , handleChange}) => {
  return (
    <div className={`w-full flex flex-col gap-4 justify-center items-center`}>
        <p className={`text-3xl font-black`}>المعلومات الشخصية</p>
        <input
        type="text"
        name="fullName"
        placeholder="أدخل اسمك بالكامل"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded focus:border-2 focus:border-blue-200"
      />
    </div>
  )
}

export default StepOne
import React from 'react'

const ProgressBar = ({step , totalSteps}) => {
  return (
    <div className={`mt-4`}>
        <div className={`w-full bg-gray-200 h-2 rounded`}>
            <div
          className="bg-green-400 h-2 rounded transition-all duration-300"
          style={{width: `${(step / totalSteps) * 100}%`}}
        ></div>
        </div>
         <p className="text-sm text-gray-500 mt-2">
        الخطوة {step} من {totalSteps}
      </p>
    </div>
  )
}

export default ProgressBar
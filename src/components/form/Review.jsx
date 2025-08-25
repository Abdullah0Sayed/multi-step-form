import React from 'react'

const Review = ({formData}) => {
  return (
    <div className={`w-full flex flex-col gap-4 justify-center`}>
        <p className={`text-4xl font-black`}>مراجعة البيانات المدخلة قبل التأكيد</p>
        <div className={`w-full flex flex-row justify-between`}>
            <div className={`w-full flex flex-col gap-4`}>
                <p className={`text-gray-400`}>الأسم بالكامل</p>
                <p className={`text-lg font-black`}>{formData.fullName}</p>
            </div>
             <div className={`w-full flex flex-col gap-4`}>
                <p className={`text-gray-400`}>نوع السيارة</p>
                <p className={`text-lg font-black`}>{formData.carModel}</p>
            </div>
        </div>
    </div>
  )
}

export default Review
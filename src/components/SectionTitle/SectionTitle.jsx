import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-6'>
            <p className='text-[#D99904] italic my-2'> ---{subHeading} ---</p>
            <p className='text-4xl md:border-y-4 uppercase py-4 "'>{heading}</p>
        </div>
    );
};

export default SectionTitle;
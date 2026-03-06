import React from 'react';

function MapSection() {
    return (
        <section className='w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20'>
            <div className='max-w-6xl mx-auto w-full'>
                <div className='w-full h-96 rounded-lg overflow-hidden shadow-lg'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5843023590255!2d90.43844501241287!3d23.762198878573408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c705ced5abc1%3A0xce7cce2462825e30!2sAll%20Next%20Ver%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sbd!4v1772793342266!5m2!1sen!2sbd'
                        width='100%'
                        height='100%'
                        style={{border: 0}}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        title='Location Map'
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default MapSection;

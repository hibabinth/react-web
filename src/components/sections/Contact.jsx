import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is a UI demonstration)");
  };

  return (
    <section id="contact" className="w-full bg-cream py-10 md:py-20 px-3 md:px-8 text-navy relative overflow-hidden font-sans scroll-mt-24 md:scroll-mt-28">

      <div className="max-w-5xl mx-auto relative mt-3 md:mt-10">
        
        {/* Main Box Container */}
        <div className="relative border-[3px] border-navy rounded-[6px] p-3 md:p-6 pt-6 md:pt-8 bg-cream w-full z-10"
             style={{ borderRadius: "12px 12px 250px 12px / 12px 12px 15px 12px" }}>
            
            {/* Left pipe decoration */}
            <div className="absolute top-[25%] left-[-28px] w-[24px] h-[350px] border-l-[4px] border-navy hidden lg:block border-radius-trick" style={{ borderRadius: "30% 10% 20% 40% / 10% 30% 40% 20%"}}>
               {/* Top joint */}
               <div className="absolute top-[20%] left-[-10px] w-[34px] h-[30px] bg-navy flex items-center justify-end rounded-l-[4px]">
                  <div className="w-[12px] h-[40px] bg-navy rounded-sm absolute right-[-6px]"></div>
               </div>
               {/* Bottom joint */}
               <div className="absolute bottom-[20%] left-[-10px] w-[34px] h-[30px] bg-navy flex items-center justify-end rounded-l-[4px]">
                  <div className="w-[12px] h-[40px] bg-navy rounded-sm absolute right-[-6px]"></div>
               </div>
            </div>

            <div className="text-center mb-5 md:mb-8 px-1 md:px-2">
              <h2 className="text-[2.95rem] leading-[1.03] md:text-[4rem] font-sans text-navy mb-2 md:mb-4 font-normal tracking-tight">
                Let's <span className="font-serif italic font-light lowercase text-[3.4rem] md:text-[4.6rem]">brew</span> the perfect<br />cup together
              </h2>
              <p className="text-xl md:text-2xl font-sans text-navy/80 font-medium tracking-tight mt-2 md:mt-3">
                Your Business. Your Vision. Our Craft.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-3">
                  <label className="text-[12px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-1 md:px-2">Name</label>
                  <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full bg-[#d7d5ce] text-navy placeholder-black/30 px-4 py-3 rounded-[8px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans text-sm md:text-base font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[12px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-1 md:px-2">Email</label>
                  <input type="email" name="email" placeholder="Your Mail" onChange={handleChange} required className="w-full bg-[#d7d5ce] text-navy placeholder-black/30 px-4 py-3 rounded-[8px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans text-sm md:text-base font-medium" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                 <div className="flex flex-col gap-3">
                  <label className="text-[12px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-1 md:px-2">Company Name</label>
                  <input type="text" name="company" placeholder="Your Company Name" onChange={handleChange} className="w-full bg-[#d7d5ce] text-navy placeholder-black/30 px-4 py-3 rounded-[8px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans text-sm md:text-base font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[12px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-1 md:px-2">Phone Number</label>
                  <input type="tel" name="phone" placeholder="Your Number" onChange={handleChange} className="w-full bg-[#d7d5ce] text-navy placeholder-black/30 px-4 py-3 rounded-[8px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans text-sm md:text-base font-medium" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[12px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-1 md:px-2">How can we help you?</label>
                <textarea name="message" placeholder="Type Your Message" onChange={handleChange} required className="w-full bg-[#d7d5ce] text-navy placeholder-black/30 px-4 py-3 rounded-[8px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans resize-none h-[130px] md:h-[160px] text-sm md:text-base font-medium"></textarea>
              </div>

              <div className="text-center pt-2 md:pt-4">
                 <button type="submit" className="w-full text-lg md:text-xl font-serif font-black italic text-cream bg-navy px-6 py-3 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                   Submit Form
                 </button>
              </div>
            </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

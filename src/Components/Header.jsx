"use client";
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiArrowRight } from 'react-icons/fi';

// Add custom CSS for animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }
  
  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
  }
  
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-600 { animation-delay: 0.6s; }
  .delay-700 { animation-delay: 0.7s; }
  .delay-1000 { animation-delay: 1s; }
`;

const Header = () => {
  const [email, setEmail] = useState("");
  const inputRef = useRef();
  
  const company = typeof window !== 'undefined' ? localStorage.getItem("company") || "" : "";

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("company", 'Martechbiz');
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
      const response = await axios.post(`${baseURL}/api/email`, formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("");
        inputRef.current.value = '';
      } else {
        toast.error(response.data.message || "Error");
      }
    } catch (error) {
      toast.error("Error occurred while subscribing");
      console.error('Subscribe error:', error);
    }
  };

  const onClear = () => {
    setEmail('');
    inputRef.current.value = '';
  };

  return (
    <>
      {/* Inject custom CSS */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      {/* <div className="relative overflow-hidden bg-gradient-to-br from-[#2d5a47] via-[#1a4d3a] to-[#0f2a1f] pt-20 md:pt-16 min-h-[80vh]"> */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2d5a47] via-[#1a4d3a] to-[#0f2a1f] min-h-[80vh]">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#40e0d0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7fffd4]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#40e0d0]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:py-20">
        
        {/* Content Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          
          {/* Left Column - Main Content */}
          <div className="text-left space-y-8 animate-fade-in-left">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#40e0d0]/20 backdrop-blur-sm rounded-full border border-[#40e0d0]/30 animate-fade-in-up delay-200">
              <span className="w-2 h-2 bg-[#40e0d0] rounded-full mr-2 animate-pulse"></span>
              <span className="text-[#40e0d0] text-sm font-medium">Stay Informed</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up delay-300">
                <span className="text-white">Latest</span>
                <br />
                <span className="bg-gradient-to-r from-[#7fffd4] to-[#40e0d0] bg-clip-text text-transparent">
                  Blogs
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-light text-[#b0f0e6] animate-fade-in-up delay-400">
                Stay Updated
              </p>
            </div>

            {/* Subheading */}
            <p className="text-lg text-[#c8f7f0] leading-relaxed max-w-lg animate-fade-in-up delay-500">
              Discover insightful articles, industry trends, and expert knowledge 
              delivered straight to your inbox. Join our community of readers today.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-[#40e0d0] animate-fade-in-up delay-700">
              <div className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-[#40e0d0] group-hover:scale-110 transition-transform"></span>
                Free Newsletter
              </div>
              <div className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-[#40e0d0] group-hover:scale-110 transition-transform"></span>
                Weekly Updates
              </div>
              <div className="flex items-center gap-2 group">
                <span className="w-3 h-3 rounded-full bg-[#40e0d0] group-hover:scale-110 transition-transform"></span>
                Expert Insights
              </div>
            </div>
          </div>

          {/* Right Column - Email Form */}
          <div className="flex flex-col justify-center animate-fade-in-right delay-600">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-[#40e0d0]/20 transition-all duration-500 hover:scale-105">
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Subscribe Now</h3>
                <p className="text-[#b0f0e6] text-sm">Get the latest insights delivered to your inbox</p>
              </div>

              {/* Email form */}
              <form 
                onSubmit={onSubmitHandler} 
                className="space-y-4"
              >
                <div className="relative">
                  <input 
                    ref={inputRef}
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    type="email" 
                    placeholder="Enter your email address" 
                    required 
                    className="w-full px-6 py-4 pr-12 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#40e0d0] focus:border-[#40e0d0] transition-all duration-300 hover:bg-white/15"
                  />
                  {email && (
                    <button 
                      type="button"
                      onClick={onClear} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                      aria-label="Clear email"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#40e0d0] to-[#20b2aa] hover:from-[#7fffd4] hover:to-[#40e0d0] text-[#0f2a1f] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#40e0d0]/30 hover:scale-105 group"
                >
                  Subscribe Now
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Form footer */}
              <div className="mt-6 text-center">
                <p className="text-white/60 text-xs">
                  No spam, unsubscribe at any time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;

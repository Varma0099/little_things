import React, { useState } from "react";
import { Calendar, Clock, Users, Palette, Sparkles, ArrowRight, Check } from "lucide-react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    activity: '',
    date: '',
    time: '',
    participants: '1'
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activities = [
    { name: 'Pottery Making', icon: '🏺', color: 'from-pink-500 to-rose-500', description: 'Shape clay into beautiful pottery' },
    { name: 'Ceramic Crafting', icon: '🎨', color: 'from-purple-500 to-pink-500', description: 'Create stunning ceramic pieces' },
    { name: 'Art & Painting', icon: '🖌️', color: 'from-orange-500 to-yellow-500', description: 'Express yourself through colors' },
    { name: 'Creative Food Center', icon: '👨‍🍳', color: 'from-green-500 to-teal-500', description: 'Cook while you create' },
    { name: 'Mixed Activities', icon: '✨', color: 'from-indigo-500 to-purple-500', description: 'Try multiple creative activities' },
    { name: 'Bharatanatyam', icon: '💃', color: 'from-red-500 to-orange-500', description: 'Classical Indian dance and storytelling' },
    { name: 'Acting Studio', icon: '🎭', color: 'from-blue-500 to-cyan-500', description: 'Explore drama and performance arts' }
];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({ name: '', email: '', phone: '', activity: '', date: '', time: '', participants: '1' });
    }, 3000);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isSubmitted) {
    return (
      <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 p-12 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-orange-400/10"></div>
        <div className="relative text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed! 🎉</h3>
          <p className="text-gray-600 text-lg">
            Thank you for booking with Little Things! We'll contact you soon to confirm your creative session.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-orange-400/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-300/20 to-pink-400/20 rounded-full blur-xl"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-200 mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-pink-600" />
            <span className="text-sm font-semibold text-pink-700">Book Your Creative Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Reserve Your Creative Slot
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose your perfect time to unleash your creativity in our inspiring studio space
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-center mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  i <= step 
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {i}
                </div>
                {i < 3 && (
                  <div className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                    i < step ? 'bg-gradient-to-r from-pink-500 to-orange-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-8 text-sm">
            <span className={step >= 1 ? 'text-pink-600 font-semibold' : 'text-gray-400'}>Personal Info</span>
            <span className={step >= 2 ? 'text-pink-600 font-semibold' : 'text-gray-400'}>Activity & Time</span>
            <span className={step >= 3 ? 'text-pink-600 font-semibold' : 'text-gray-400'}>Confirmation</span>
          </div>
        </div>

        <div>
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2 text-pink-500" />
                Tell Us About Yourself
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 group-hover:border-pink-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 group-hover:border-pink-300"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 group-hover:border-pink-300"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Number of Participants</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 group-hover:border-pink-300"
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Palette className="w-6 h-6 mr-2 text-pink-500" />
                Choose Your Creative Experience
              </h3>
              
              {/* Activity Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Select Activity</label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.name}
                      onClick={() => setFormData({ ...formData, activity: activity.name })}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        formData.activity === activity.name
                          ? `border-pink-500 bg-gradient-to-br ${activity.color} text-white shadow-lg`
                          : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                      }`}
                    >
                      <div className="text-2xl mb-2">{activity.icon}</div>
                      <h4 className="font-semibold mb-1">{activity.name}</h4>
                      <p className={`text-sm ${formData.activity === activity.name ? 'text-white/80' : 'text-gray-500'}`}>
                        {activity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 group-hover:border-pink-300"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-pink-500" />
                    Preferred Time
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 group-hover:border-pink-300"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Check className="w-6 h-6 mr-2 text-pink-500" />
                Confirm Your Booking
              </h3>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold text-gray-700">Name:</span> {formData.name}</div>
                  <div><span className="font-semibold text-gray-700">Email:</span> {formData.email}</div>
                  <div><span className="font-semibold text-gray-700">Phone:</span> {formData.phone}</div>
                  <div><span className="font-semibold text-gray-700">Activity:</span> {formData.activity}</div>
                  <div><span className="font-semibold text-gray-700">Date:</span> {formData.date}</div>
                  <div><span className="font-semibold text-gray-700">Time:</span> {formData.time}</div>
                  <div><span className="font-semibold text-gray-700">Participants:</span> {formData.participants} {formData.participants === '1' ? 'Person' : 'People'}</div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={prevStep}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                step === 1 
                  ? 'invisible' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center"
              >
                Next Step
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BookingSection;
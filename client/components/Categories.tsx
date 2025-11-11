import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, MapPin, Clock, Star, ChevronRight, Sparkles, X, Phone, Mail, User, Calendar, Users, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';
import { useToast } from "@/hooks/use-toast";

const categories = [
  {
    name: "Tirupati Temples",
    description: "Lord Venkateswara & nearby shrines",
    icon: "🛕",
    image: "/tirmula2.png",
    duration: "Full Day",
    rating: 4.9,
    visitors: "10k+ visitors",
  },
  {
    name: "Sri Kalahasti",
    description: "Rahu-Ketu temple tours",
    icon: "🕉️",
    image: "/srikalahasti.jpg",
    duration: "Half Day",
    rating: 4.8,
    visitors: "8k+ visitors",
  },
  {
    name: "Kanipakam",
    description: "Vinayaka darshan packages",
    icon: "🐘",
    image: "/kanipakam_vinayaka.jpg",
    duration: "Half Day",
    rating: 4.7,
    visitors: "6k+ visitors",
  },
  {
    name: "Talakona Falls",
    description: "Waterfall & temple trek",
    icon: "💧",
    image: "/Talakona_waterfall.jpg",
    duration: "Full Day",
    rating: 4.8,
    visitors: "7k+ visitors",
  },
  {
    name: "Chandragiri Fort",
    description: "Historical heritage site",
    icon: "🏰",
    image: "/chandragiri_fort.jpg",
    duration: "3-4 Hours",
    rating: 4.6,
    visitors: "5k+ visitors",
  },
  {
    name: "Nagalapuram Falls",
    description: "Trekking & waterfalls",
    icon: "🏞️",
    image: "/nagalapuramfalls.jpg",
    duration: "Full Day",
    rating: 4.7,
    visitors: "4k+ visitors",
  },
  {
    name: "Sri Venkateswara Zoo",
    description: "Wildlife & nature park",
    icon: "🦁",
    image: "/zoo.jpg",
    duration: "3-4 Hours",
    rating: 4.5,
    visitors: "9k+ visitors",
  },
  {
    name: "Papavinasanam",
    description: "Sacred waterfall temple",
    icon: "🙏",
    image: "/papa vinasanam.jpg",
    duration: "Half Day",
    rating: 4.8,
    visitors: "6k+ visitors",
  },
  {
    name: "Akasa Ganga",
    description: "Mountain spring trek",
    icon: "⛲",
    image: "/akasaganga.jpg",
    duration: "2-3 Hours",
    rating: 4.6,
    visitors: "5k+ visitors",
  },
];

// Enhanced Card Component
function EnhancedDestinationCard({ 
  category, 
  index,
  onExplore
}: { 
  category: typeof categories[0]; 
  index: number;
  onExplore: (category: typeof categories[0]) => void;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl h-72 sm:h-80 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8 }}
    >
      {/* Background Image with Parallax Zoom */}
      <motion.img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 group-hover:to-black/90 transition-all duration-500" />

      {/* Animated Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Badge Section */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
        {/* Emoji Icon Badge with Pop Animation */}
        {/* <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-center text-2xl sm:text-3xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {category.icon}
        </motion.div> */}

        {/* Rating Badge with Shine */}
        <motion.div
          className="px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-md shadow-lg flex items-center gap-1.5 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <Star className="w-3.5 h-3.5 fill-white text-white relative z-10" />
          <span className="text-white font-bold text-sm relative z-10">{category.rating}</span>
        </motion.div>
      </div>

      {/* Content Container - Bottom Section */}
      <div className="absolute inset-0 flex items-end p-5 sm:p-6">
        <div className="w-full relative">
          {/* Title Section - Always visible */}
          <div className="flex items-center justify-between text-white mb-2">
            <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] line-clamp-1 flex-1">
              {category.name}
            </h3>
            {/* Arrow Icon */}
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight className="w-6 h-6 text-emerald-400" />
            </motion.div>
          </div>

          {/* Description - Subtle Always Visible */}
          <p className="text-white/80 text-sm font-['Lato'] mb-3 line-clamp-1">
            {category.description}
          </p>

          {/* Expandable Section - Shown on hover with smooth animation */}
          <div className="max-h-0 group-hover:max-h-32 transition-all duration-500 ease-out overflow-hidden">
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              initial={false}
            >
              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Duration */}
                <div className="flex items-center gap-2 text-white">
                  <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs opacity-80 font-['Lato']">Duration</p>
                    <p className="font-semibold text-sm font-['Lato']">{category.duration}</p>
                  </div>
                </div>

                {/* Visitors */}
                <div className="flex items-center gap-2 text-white">
                  <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs opacity-80 font-['Lato']">Popular</p>
                    <p className="font-semibold text-sm font-['Lato']">{category.visitors}</p>
                  </div>
                </div>
              </div>

              {/* Explore Button */}
              <motion.button
                onClick={() => onExplore(category)}
                className="w-full py-2.5 rounded-xl font-['Lato'] font-bold text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg flex items-center justify-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
                <Sparkles className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Explore Destination</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner Accent - Animated on Hover */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
    </motion.div>
  );
}

// Destination Details Modal
function DestinationModal({ 
  category, 
  isOpen, 
  onClose,
  onContactClick 
}: { 
  category: typeof categories[0] | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}) {
  if (!category) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Hero Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Icon Badge */}
                {/* <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex items-center justify-center text-4xl">
                  {category.icon}
                </div> */}

                {/* Rating */}
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-emerald-500/95 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white text-white" />
                  <span className="text-white font-bold">{category.rating}</span>
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-white font-['Playfair_Display'] text-3xl sm:text-4xl font-bold mb-2">
                    {category.name}
                  </h2>
                  <p className="text-white/90 font-['Lato'] text-lg">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-emerald-500">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm text-gray-600 font-['Lato']">Duration</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900 font-['Lato']">{category.duration}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-500">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm text-gray-600 font-['Lato']">Popularity</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900 font-['Lato']">{category.visitors}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-3">
                    About This Destination
                  </h3>
                  <p className="text-gray-600 font-['Lato'] leading-relaxed">
                    Experience the divine beauty and spiritual essence of {category.name}. 
                    This sacred destination offers a perfect blend of devotion, natural beauty, 
                    and cultural heritage. Whether you're seeking spiritual enlightenment or 
                    exploring the rich history of the region, this journey promises unforgettable moments.
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-3">
                    Highlights
                  </h3>
                  <div className="space-y-2">
                    {['Sacred temple darshan', 'Guided tour with expert', 'Comfortable transportation', 'Refreshments included'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <p className="text-gray-700 font-['Lato']">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={onContactClick}
                    className="flex-1 px-6 py-4 rounded-xl font-['Lato'] font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Contact Us
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={onClose}
                    className="flex-1 px-6 py-4 rounded-xl font-['Lato'] font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Contact Form Modal (Slides from Right)
function ContactFormModal({ 
  isOpen, 
  onClose,
  category
}: { 
  isOpen: boolean;
  onClose: () => void;
  category: typeof categories[0] | null;
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Phone)",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        travel_date: formData.date || 'Not specified',
        guests: formData.guests || 'Not specified',
        destination: category?.name || 'General Inquiry',
        message: formData.message || 'No special requirements',
        to_email: 'admin@guptatravels.com', // Your admin email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        // Success
        toast({
          title: "✅ Booking Request Sent!",
          description: "Thank you for your submission! We will contact you soon.",
          className: "bg-emerald-50 border-emerald-500",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          guests: '',
          message: ''
        });

        // Close modal after short delay
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "❌ Sending Failed",
        description: "Unable to send your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide-in Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-[60] overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-2">
                Book Your Journey
              </h2>
              <p className="font-['Lato'] text-emerald-100">
                {category ? `to ${category.name}` : 'Contact us for details'}
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                    placeholder="+91 xxxxx xxxxx"
                  />
                </div>
              </div>

              {/* Date & Guests Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato'] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato']"
                      placeholder="2"
                    />
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 font-['Lato'] mb-2">
                  Special Requirements
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-['Lato'] resize-none"
                  placeholder="Any special requests or questions..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-xl font-['Lato'] font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg relative overflow-hidden ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                )}
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Submit Booking Request
                    </>
                  )}
                </span>
              </motion.button>

              {/* Info Text */}
              <p className="text-center text-sm text-gray-500 font-['Lato']">
                We'll contact you within 24 hours to confirm your booking
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Categories() {
  const [selectedDestination, setSelectedDestination] = useState<typeof categories[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleExplore = (category: typeof categories[0]) => {
    setSelectedDestination(category);
    setShowDetailsModal(true);
  };

  const handleContactClick = () => {
    setShowDetailsModal(false);
    setTimeout(() => setShowContactModal(true), 300);
  };

  const handleCloseContact = () => {
    setShowContactModal(false);
  };

  const handleCloseDetails = () => {
    setShowDetailsModal(false);
    setSelectedDestination(null);
  };
  return (
    <section className="w-full px-4 sm:px-8 lg:px-24 py-16 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl opacity-50" />

      {/* Enhanced Header Section */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Animated Badge */}
        <motion.div 
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 blur-xl opacity-30 animate-pulse" />
            <div className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-200">
              <span className="text-emerald-700 font-['Lato'] font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Popular Destinations
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-gray-900">Explore Sacred </span>
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Destinations
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-lg text-gray-600 font-['Lato'] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Embark on spiritual journeys, witness breathtaking waterfalls, and explore historical wonders 
          in the sacred region of Tirupati
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Enhanced Carousel Section */}
      <motion.div 
        className="relative px-2 sm:px-0 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {categories.map((category, index) => (
              <CarouselItem 
                key={index} 
                className="pl-4 sm:pl-6 basis-[85%] sm:basis-[70%] md:basis-[48%] lg:basis-[32%] xl:basis-[25%]"
              >
                <EnhancedDestinationCard 
                  category={category} 
                  index={index} 
                  onExplore={handleExplore}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation Buttons */}
          <CarouselPrevious className="left-0 sm:-left-6 lg:-left-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-emerald-500 bg-white text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110" />
          <CarouselNext className="right-0 sm:-right-6 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 border-2 border-emerald-500 bg-white text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110" />
        </Carousel>
        
        {/* Mobile Swipe Indicator */}
        <motion.div 
          className="flex sm:hidden justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-20 animate-pulse" />
            <div className="relative text-emerald-600 text-sm font-['Lato'] flex items-center gap-3 px-6 py-3.5 rounded-full bg-white border-2 border-emerald-200 font-bold shadow-lg">
              <ArrowRight className="w-5 h-5 animate-bounce -scale-x-100" />
              <span>Swipe to Explore</span>
              <ArrowRight className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <DestinationModal 
        category={selectedDestination}
        isOpen={showDetailsModal}
        onClose={handleCloseDetails}
        onContactClick={handleContactClick}
      />
      
      <ContactFormModal 
        category={selectedDestination}
        isOpen={showContactModal}
        onClose={handleCloseContact}
      />
    </section>
  );
}

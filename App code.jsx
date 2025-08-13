import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, Clock, MapPin, Star, Smartphone, Scissors, Users, Zap, Shield, Award, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'
import './App.css'

// Import logo assets
import techcutLogo from './assets/techcut_primary_logo.png'
import techcutIcon from './assets/techcut_icon_symbol.png'
import techcutBasic from './assets/techcut_basic_tier_logo.png'
import techcutDeluxe from './assets/techcut_deluxe_tier_logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [bookingStep, setBookingStep] = useState(1)

  const serviceTiers = [
    {
      id: 'basic',
      name: 'TechCut Basic',
      logo: techcutBasic,
      price: 'RM 25-45',
      description: 'Community-focused barbering with modern technology',
      features: [
        'Precision haircuts',
        'Basic beard trimming',
        'Digital booking & payment',
        'QR queue management',
        'Loyalty rewards',
        'Comfortable waiting area'
      ],
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      id: 'intermediate',
      name: 'TechCut Intermediate',
      logo: techcutLogo,
      price: 'RM 45-75',
      description: 'Enhanced grooming experience with premium services',
      features: [
        'Premium haircuts with consultation',
        'Advanced beard grooming',
        'Hot towel treatments',
        'Scalp massage',
        'Eyebrow trimming',
        'AI-powered style recommendations',
        'Premium amenities'
      ],
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      id: 'deluxe',
      name: 'TechCut Deluxe',
      logo: techcutDeluxe,
      price: 'RM 75-150',
      description: 'Luxury grooming destination with exclusive experiences',
      features: [
        'Master-level precision cuts',
        'Luxury beard styling',
        'Premium hot towel treatments',
        'Relaxing scalp & facial treatments',
        'Straight razor shaves',
        'Personal grooming consultation',
        'VIP amenities & concierge service',
        'Exclusive product access'
      ],
      color: 'bg-amber-500',
      textColor: 'text-amber-600'
    }
  ]

  const features = [
    {
      icon: Smartphone,
      title: 'AI-Powered Booking',
      description: 'Smart appointment scheduling with personalized recommendations'
    },
    {
      icon: Scissors,
      title: 'Expert Barbers',
      description: 'Skilled professionals trained in modern techniques and technology'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'More than a barbershop - a place to connect and socialize'
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'QR codes, digital payments, and seamless customer experience'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Consistent service standards across all TechCut locations'
    },
    {
      icon: Award,
      title: 'Franchise Support',
      description: 'Comprehensive training and ongoing business support'
    }
  ]

  const BookingModal = () => {
    if (!selectedService) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Book {selectedService.name}</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedService(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {bookingStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Service</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Haircut & Style</option>
                    <option>Beard Grooming</option>
                    <option>Hot Towel Treatment</option>
                    <option>Complete Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
                <Button onClick={() => setBookingStep(2)} className="w-full">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {bookingStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-2 border rounded-md" placeholder="+60 12-345-6789" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Special Requests</label>
                  <textarea className="w-full p-2 border rounded-md" rows="3" placeholder="Any specific requirements or preferences..."></textarea>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={() => setBookingStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => {
                    alert('Booking confirmed! You will receive a confirmation SMS shortly.')
                    setSelectedService(null)
                    setBookingStep(1)
                  }} className="flex-1">
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={techcutLogo} alt="TechCut Barber" className="h-8 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#franchise" className="text-gray-700 hover:text-blue-600 transition-colors">Franchise</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline">Find Location</Button>
              <Button>Book Now</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
              <a href="#franchise" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Franchise</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full">Find Location</Button>
                <Button className="w-full">Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img src={techcutIcon} alt="TechCut Icon" className="h-20 w-20 mx-auto mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Modern Technology Meets
              <span className="text-blue-600 block">Traditional Craftsmanship</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the future of barbering with TechCut's innovative franchise model. 
              AI-powered booking, digital payments, and exceptional grooming services across three premium tiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Book Your Cut <Scissors className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Join Our Franchise <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct service tiers designed to meet every customer's needs and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier) => (
              <Card key={tier.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`absolute top-0 left-0 right-0 h-1 ${tier.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <img src={tier.logo} alt={tier.name} className="h-16 w-auto mx-auto" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className={`text-3xl font-bold ${tier.textColor} mb-2`}>{tier.price}</div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={tier.id === 'intermediate' ? 'default' : 'outline'}
                    onClick={() => setSelectedService(tier)}
                  >
                    Book {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TechCut?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary technology and traditional craftsmanship combined to deliver exceptional experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powered by Advanced Technology
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile App Integration</h3>
                    <p className="text-gray-600">Book appointments, manage preferences, and earn rewards through our intuitive mobile app.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Scheduling</h3>
                    <p className="text-gray-600">Smart algorithms optimize appointment times and reduce wait times for better customer experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-600">Machine learning analyzes your preferences to suggest the perfect styles and services.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Digital Innovation</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  QR Code Queue Management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Contactless Payment Systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Real-time Analytics Dashboard
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Customer Loyalty Programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Social Media Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Opportunity */}
      <section id="franchise" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the TechCut Revolution
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Partner with us to bring innovative barbering technology to your community. 
            Comprehensive support, proven systems, and unlimited growth potential.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Franchise Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support System</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Learn About Franchising <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <img src={techcutLogo} alt="TechCut Barber" className="h-8 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400 mb-4">
                Revolutionizing the barbering industry through technology and exceptional service. 
                Join the TechCut community today.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">Facebook</Button>
                <Button variant="ghost" size="sm">Instagram</Button>
                <Button variant="ghost" size="sm">Twitter</Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>TechCut Basic</li>
                <li>TechCut Intermediate</li>
                <li>TechCut Deluxe</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Franchise</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechCut Barber. All rights reserved. Powered by innovative technology and traditional craftsmanship.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal />
    </div>
  )
}

export default App


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    reason: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Demo Request Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours to schedule your demo.",
    });

    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      contactNo: '',
      reason: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-32 relative overflow-hidden">
      {/* Beautiful Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-pink-100/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-spin" style={{ animationDuration: '15s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold mb-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Calendar className="w-4 h-4 mr-3 animate-pulse" />
              Schedule Your Demo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Book a Personalized
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Demo Session
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              See how Trackaroo can transform your automotive business. Get a personalized demo tailored to your specific needs.
            </p>
          </div>

          {/* Demo Form */}
          <Card className="bg-white/90 backdrop-blur-sm border border-blue-200/50 shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-500 rounded-3xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-8">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">Demo Request Form</CardTitle>
              <CardDescription className="text-gray-600 text-lg font-medium">
                Fill out the form below and our team will contact you to schedule your personalized demo.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-xl"
                      required
                    />
                  </div>
                </div>

                {/* Contact Number and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactNo" className="text-gray-700 font-semibold">Contact Number *</Label>
                    <Input
                      id="contactNo"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.contactNo}
                      onChange={(e) => handleInputChange('contactNo', e.target.value)}
                      className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-semibold">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-xl"
                    />
                  </div>
                </div>

                {/* Reason for Demo */}
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-gray-700 font-semibold">Reason for Demo *</Label>
                  <Select value={formData.reason} onValueChange={(value) => handleInputChange('reason', value)}>
                    <SelectTrigger className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-xl">
                      <SelectValue placeholder="Select a reason for your demo" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 shadow-xl">
                      <SelectItem value="inventory-management" className="text-gray-900 hover:bg-blue-50">
                        Inventory Management
                      </SelectItem>
                      <SelectItem value="customer-relations" className="text-gray-900 hover:bg-blue-50">
                        Customer Relations
                      </SelectItem>
                      <SelectItem value="staff-management" className="text-gray-900 hover:bg-blue-50">
                        Staff Management
                      </SelectItem>
                      <SelectItem value="expense-tracking" className="text-gray-900 hover:bg-blue-50">
                        Expense Tracking
                      </SelectItem>
                      <SelectItem value="sales-analytics" className="text-gray-900 hover:bg-blue-50">
                        Sales Analytics
                      </SelectItem>
                      <SelectItem value="general-inquiry" className="text-gray-900 hover:bg-blue-50">
                        General Inquiry
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Additional Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your specific needs or questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-xl min-h-[100px]"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold text-lg py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block" />
                        Submitting Request...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">Quick Setup</h3>
              <p className="text-gray-600 text-sm">Get started in minutes with our easy setup process</p>
            </div>
            <div className="group text-center bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">Expert Support</h3>
              <p className="text-gray-600 text-sm">Dedicated support team to help you succeed</p>
            </div>
            <div className="group text-center bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">Proven Results</h3>
              <p className="text-gray-600 text-sm">Join 500+ successful automotive businesses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;

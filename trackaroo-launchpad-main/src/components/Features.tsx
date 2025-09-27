import { 
  Truck, 
  Database, 
  MapPin, 
  CheckSquare, 
  Users, 
  DollarSign, 
  ClipboardCheck, 
  LineChart,
  CreditCard,
  BarChart3,
  Fuel
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Stockyard Management",
      description: "Complete vehicle inventory control, transfers, and delivery tracking across all locations.",
      color: "bg-automotive-orange"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Master Data",
      description: "Centralized management of vehicle configurations, pricing, and discount schemes.",
      color: "bg-primary"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Post Delivery Inspection",
      description: "Quality control and inspection management system for delivered vehicles.",
      color: "bg-automotive-indigo"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Expense Tracking",
      description: "Multi-branch expense management with detailed reporting and analytics.",
      color: "bg-automotive-green"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Field Staff Management",
      description: "Real-time location tracking and activity monitoring for field personnel.",
      color: "bg-automotive-purple"
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Task Management",
      description: "Project management with Kanban boards for streamlined workflow organization.",
      color: "bg-automotive-teal"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Management",
      description: "Comprehensive user administration and role-based access control system.",
      color: "bg-automotive-orange"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Salary Management",
      description: "Complete payroll system with attendance tracking and automated payslip generation.",
      color: "bg-automotive-green"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Reconciliation",
      description: "Advanced financial tracking and payment reconciliation for all transactions.",
      color: "bg-automotive-purple"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reports & Analytics",
      description: "Comprehensive business intelligence with customizable reports and insights.",
      color: "bg-primary"
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Fuel Management",
      description: "Track analysis and create fuel slip for company vehicle.",
      color: "bg-automotive-orange"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 via-purple-100/10 to-pink-100/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Automotive Business
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Needs in One Platform</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            From inventory management to financial tracking, Trackaroo provides all the tools 
            you need to run a successful automotive business efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-2"
            >
              {/* Feature Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
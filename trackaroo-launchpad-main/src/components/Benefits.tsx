import { TrendingUp, Shield, Clock, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Increase Revenue by 35%",
      description: "Optimize your operations and reduce waste with intelligent inventory management and automated workflows.",
      stats: "Average revenue increase reported by customers"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Save 20+ Hours Weekly",
      description: "Automate repetitive tasks and streamline processes to focus on growing your business instead of managing paperwork.",
      stats: "Time saved per week on administrative tasks"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "99.9% Data Security",
      description: "Enterprise-grade security with encrypted data storage, regular backups, and compliance with industry standards.",
      stats: "Uptime guarantee with bank-level security"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Improve Team Productivity",
      description: "Real-time collaboration tools and mobile access keep your team connected and productive from anywhere.",
      stats: "Better coordination across all departments"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-accent/30 to-primary-light/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Automotive Businesses
            <span className="block text-gradient">Choose Trackaroo</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of successful dealerships and automotive businesses that have transformed 
            their operations with our comprehensive platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-large transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {benefit.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 bg-card border border-border rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground">
              See what automotive business owners are saying about Trackaroo
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-foreground">Shobit Mighlani</h4>
                  <p className="text-sm text-muted-foreground">Automative DMS</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Trackaroo transformed how we manage our inventory. We've reduced time waste by 40% 
                and increased our profit margins significantly."
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-foreground">Akshay Patni</h4>
                  <p className="text-sm text-muted-foreground">Field Staff Tracking</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The field staff tracking feature is amazing. We can monitor our team in real-time 
                and improve customer service delivery."
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  RW
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-foreground">Robert Wilson</h4>
                  <p className="text-sm text-muted-foreground">Finance Director</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The expense tracking and reporting features give us complete financial visibility. 
                Best investment we've made for our business."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
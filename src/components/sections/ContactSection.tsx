import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I will get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Contact
            </h2>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif">
                Let's work together
              </h3>
              <p className="text-muted-foreground">
                Open to internship opportunities, collaborations, and interesting projects. 
                Feel free to reach out.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  required
                  className="bg-card resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </form>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Or email directly at{" "}
                <a 
                  href="mailto:atul.sharma@email.com" 
                  className="text-foreground hover:underline underline-offset-4"
                >
                  atul.sharma@email.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

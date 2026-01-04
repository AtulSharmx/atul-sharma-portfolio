import { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EMAILJS_SERVICE_ID = "service_n9q27tw";
const EMAILJS_TEMPLATE_ID = "template_5963m7m";
const EMAILJS_PUBLIC_KEY = "x-bV8g6m1Qdy0F1Ky";

const contactSchema = z.object({
  from_name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  from_email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const validateForm = (): boolean => {
    if (!formRef.current) return false;
    
    const formData = new FormData(formRef.current);
    const data = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I will get back to you soon.",
      });
      
      formRef.current?.reset();
      setErrors({});
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div 
            className={`lg:col-span-1 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
              Contact
            </h2>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div 
              className={`space-y-4 transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-serif">
                Let's work together
              </h3>
              <p className="text-muted-foreground">
                Open to internship opportunities, collaborations, and interesting projects. 
                Feel free to reach out.
              </p>
            </div>

            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    placeholder="Your name"
                    required
                    className={`bg-card transition-all duration-300 focus:scale-[1.01] ${errors.from_name ? "border-destructive" : ""}`}
                  />
                  {errors.from_name && (
                    <p className="text-sm text-destructive animate-fade-in">{errors.from_name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="from_email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className={`bg-card transition-all duration-300 focus:scale-[1.01] ${errors.from_email ? "border-destructive" : ""}`}
                  />
                  {errors.from_email && (
                    <p className="text-sm text-destructive animate-fade-in">{errors.from_email}</p>
                  )}
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
                  className={`bg-card resize-none transition-all duration-300 focus:scale-[1.005] ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && (
                  <p className="text-sm text-destructive animate-fade-in">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="group hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <div 
              className={`pt-8 border-t border-border transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-sm text-muted-foreground">
                Or email directly at{" "}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=atul.sharma.09.10.2006@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline underline-offset-4 transition-all duration-300 hover:text-primary"
                >
                  atul.sharma.09.10.2006@gmail.com
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

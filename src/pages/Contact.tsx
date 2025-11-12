import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animation/variants";




const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  jobTitle: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", { // The updated API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // --- Start of Changes ---

      if (!res.ok) {
        // If the server response is not OK (e.g., status 400 or 500), throw an error.
        const errorResult = await res.json();
        throw new Error(errorResult.message || "An unknown error occurred.");
      }

      const result = await res.json();

      toast({
        title: "Message sent!",
        description: result.message || "Thanks for reaching out. We'll reply soon.",
      });

      form.reset();
      
      // --- End of Changes ---

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#EF4343] grid-overlay-light">
        <motion.div variants={fadeInUp}
          initial="hidden"
          animate="visible" className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold mb-8 text-foreground">
              Work with us
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-foreground max-w-2xl leading-relaxed">
              From the smallest crafted creative to a moonshot idea, we have what it takes to make your project come to life.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-black">Let's get started</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">First name *</FormLabel>
                          <FormControl>
                            <Input placeholder="First name" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Last name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Last name" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Email" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Phone *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Phone number" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>


                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Job Title" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Company" className="h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px] text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-black">Contact Number</h3>
                <a
                  href="callto:9819416689"
                  className="text-primary hover:text-primary/80 transition-colors text-lg"
                >
                  +91 9819416689
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-black">General enquiries</h3>
                <a
                  href="mailto:Team@newsmakermediagroup.com"
                  className="text-primary hover:text-primary/80 transition-colors text-lg"
                >
                  Team@newsmakermediagroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertInquirySchema.omit({ propertyId: true })),
  });

  const onSubmit = async (data: any) => {
    try {
      await apiRequest("POST", "/api/inquiries", data);
      toast({
        title: "Success",
        description: "Your message has been sent. We'll contact you soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Input
              placeholder="Name"
              {...form.register("name")}
              error={form.formState.errors.name?.message}
            />
            <Input
              placeholder="Email"
              {...form.register("email")}
              error={form.formState.errors.email?.message}
            />
            <Input
              placeholder="Phone"
              {...form.register("phone")}
              error={form.formState.errors.phone?.message}
            />
            <Textarea
              placeholder="Message"
              {...form.register("message")}
              error={form.formState.errors.message?.message}
              className="h-32"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Office Location</h3>
              <p className="text-gray-600">
                Tirana, Albania
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(+355) 69 44 38 208</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">ssinvestmentbrokeralbania@hotmail.com</p>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4"
            alt="Office"
            className="rounded-lg mt-8"
          />
        </div>
      </div>
    </div>
  );
}

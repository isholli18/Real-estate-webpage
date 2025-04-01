import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
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
                    <FormControl>
                      <Input placeholder="Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message" className="h-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
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
            src="https://media.istockphoto.com/id/1018858990/vector/caucasian-and-chinese-international-business-men-shaking-hands-two-businessman-first-meeting.jpg?s=612x612&w=0&k=20&c=cAIx_JqvOcLa0Yujml7kccmb43XZJJ9aKAAgD4jm_pk="
            alt="Office"
            className="rounded-lg mt-8"
          />
        </div>
      </div>
    </div>
  );
}
import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { type Property } from "@shared/schema";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, Mail, Phone } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
// import { mockProperties } from "@/lib/propertyData";
import { data_properties } from "@server/data";

export default function Property() {
  const { id } = useParams();
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const { toast } = useToast();

  //changed to read from monckProperties
  // const { data: property, isLoading } = useQuery<Property>({
  //   queryKey: [`/api/properties/${id}`],
  // });

   // Use mockProperties to find the property by ID
   const property = data_properties.find((p) => p.id === Number(id));

  const form = useForm({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyId: Number(id),
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await apiRequest("POST", "/api/inquiries", data);
      toast({
        title: "Success",
        description: "Your inquiry has been sent. We'll contact you soon!",
      });
      setInquiryOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    }
  };

  // if (isLoading) {
  //   return <div className="h-96 animate-pulse bg-gray-100" />;
  // }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mt-8 mb-4">{property.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ImageGallery images={property.images} />
          <h1 className="text-3xl font-bold mt-8 mb-4">Property Description</h1>
          <p className="text-gray-600 mb-8">{property.description}</p>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-6">
                ${property.price.toLocaleString()}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <Bed className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">
                    {property.bedrooms} Beds
                  </div>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">
                    {property.bathrooms} Baths
                  </div>
                </div>
                <div className="text-center">
                  <Square className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">
                    {property.m2} m2
                  </div>
                </div>
              </div>

              <Button
                className="w-full mb-4"
                onClick={() => setInquiryOpen(true)}
              >
                Request Information
              </Button>

              <div className="text-sm text-gray-600">
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  ssinvestmentbrokeralbania@hotmail.com
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (+355) 69 44 38 208
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={inquiryOpen} onOpenChange={setInquiryOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Information</DialogTitle>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Name"
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Email"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Phone"
                {...form.register("phone")}
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Message"
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Send Inquiry
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
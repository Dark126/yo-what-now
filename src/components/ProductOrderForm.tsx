
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { products } from "@/components/Products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Package, ArrowRight, User, Mail, Phone } from "lucide-react";

interface ProductOrderFormProps {
  productId: number;
  productName: string;
  packagingId: string;
}

type OrderFormValues = {
  fullName: string;
  email: string;
  phone: string;
  note: string;
};

const ProductOrderForm = ({ 
  productId, 
  productName, 
  packagingId 
}: ProductOrderFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const product = products.find(p => p.id === productId);
  const packagingOption = product?.packagingOptions.find(p => p.id === packagingId);
  
  const form = useForm<OrderFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      note: "",
    }
  });

  const onSubmit = (data: OrderFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Order submitted:", {
        product: productName,
        packaging: packagingOption?.label,
        ...data
      });
      
      toast({
        title: "Order submitted successfully",
        description: "We will contact you soon with a quote",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
      <div className="mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-spice-700">Order Summary</h3>
          <span className="text-sm text-gray-500">Please verify your selection</span>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-spice-100 p-2 rounded-full">
              <Package className="h-5 w-5 text-spice-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{productName}</p>
              <p className="text-sm text-gray-500">Product</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2 rounded-full">
              <Package className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{packagingOption?.label}</p>
              <p className="text-sm text-gray-500">Packaging</p>
            </div>
          </div>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="John Doe" 
                      {...field} 
                      className="pl-10"
                    />
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="example@email.com" 
                        type="email" 
                        {...field} 
                        className="pl-10"
                      />
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    </div>
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
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="+1 (555) 123-4567" 
                        type="tel" 
                        {...field} 
                        className="pl-10"
                      />
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any specific requirements or questions..." 
                    className="resize-none h-24"
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
            className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-spice-600 hover:from-amber-600 hover:to-spice-700 text-white"
          >
            {isSubmitting ? "Processing..." : "Request Quote"}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductOrderForm;

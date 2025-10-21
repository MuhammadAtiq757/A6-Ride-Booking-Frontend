import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import type { ReactNode } from "react";
import { useRideFeedbackMutation } from "@/redux/features/ride/riders.api";

// Zod schema for validation
const feedbackSchema = z.object({
  feedback: z
    .string()
    .min(2, { message: "Feedback is too short" })
    .max(200, { message: "Feedback is too long" }),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

type FeedbackModalProps = {
  children: ReactNode;
  rideId: string;
};

export default function FeedbackModal({
  children,
  rideId,
}: FeedbackModalProps) {
  const [giveFeedback, { isLoading }] = useRideFeedbackMutation();

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { feedback: "" },
  });

  const onSubmit = async (data: FeedbackFormData) => {
    try {
      await giveFeedback({ rideId, feedback: data.feedback }).unwrap();
      toast.success("Feedback submitted successfully!");
      form.reset();
    } catch (err: any) {
      console.error("Failed to submit feedback:", err);
      // Display proper message if backend sends error.message
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Give Feedback</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your feedback..."
                      {...field}
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit Feedback"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

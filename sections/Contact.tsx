"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import axios from "axios";

import {
  ArrowBigUpDash,
  BookOpenText,
  ExternalLink,
  Github,
  LinkedinIcon,
  Loader2,
  LocateIcon,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { stringify } from "querystring";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

// form schema for login
const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  name: z.string().min(6, {
    message: "Minimum 3 characters required",
  }),
  message: z.string(),
});

export default function Contact() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // initializing the react form hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  // form submission function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const req = await axios.post(
        "https://email-service-three.vercel.app/mail",
        values
      );
      if (req.data.message === "Email sent successfully") {
        setIsLoading(false);
        form.reset();
        router.push("/");
        toast({
          title: req.data.message,
          description: "Thanks for getting in touch with me",
          duration: 5000,
        });
      } else {
        setIsLoading(false);
        toast({
          title: "Unable to Send Mail",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Unable to Send Mail",
        variant: "destructive",
      });
    }
  }

  return (
    <footer
      id="contact"
      className="min-h-screen bg-[url('/assets/78786.jpg')] dark:bg-[url('/assets/darkcity.jpg')]    sm:bg-cover bg-center max-w-full p-4 pb-28"
    >
      <h2 className="pt-28 capitalize text-3xl font-bold text-center">
        Get in touch
      </h2>
      <p className="max-w-xl text-sm  mt-2 mx-auto text-center">
        we'll create high quality linkable content and build at least 40
        hight-authority links to each asset,paving the way for you
        rankings,improve brand.
      </p>
      <Card className="max-w-4xl  flex flex-col sm:flex-row  mx-auto mt-16 p-2">
        <Card className="w-full  sm:w-96 shrink-0 space-y-7 p-6 ">
          <h4>Contact information</h4>
          <div className="flex items-center gap-3">
            <div className="bg-blue-200 p-2 rounded-xl">
              <LinkedinIcon className="h-8 w-8" />
            </div>
            <Link
              href="https://www.linkedin.com/in/sarathfsd/"
              target="_blank"
              rel="noreferror"
            >
              www.linkedin.com/in/sarathfsd
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-200 p-2 rounded-xl">
              <Github className="h-8 w-8" />
            </div>
            <Link
              href="https://github.com/SARATHKUMAR-T"
              target="_blank"
              rel="noreferror"
            >
              github.com/SARATHKUMAR-T
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-200 p-2 rounded-xl">
              <BookOpenText className="h-8 w-8" />
            </div>
            <Link
              href="https://drive.google.com/file/d/17Dey8mDvQDky9eIseSyPpm1Y933nZsCb/view?usp=sharing"
              target="_blank"
              rel="noreferror"
            >
              drive.google.com/sarath_resume
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-200 p-2 rounded-xl">
              <Mail className="h-8 w-8" />
            </div>
            <Link
              href="mailto:sarathkumartk98@gmail.com"
              target="_blank"
              rel="noreferror"
            >
              sarathkumartk98@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-200 p-2 rounded-xl">
              <MapPin className="h-8 w-8" />
            </div>
            <Link href="#">Tiruchirappalli,TN</Link>
          </div>
        </Card>
        <div className="w-full p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="jhon doe" {...field} />
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
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="jhon@email.com"
                        {...field}
                      />
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
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        {...field}
                        placeholder="Write Your Message Here..."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full  " disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </Card>
    </footer>
  );
}

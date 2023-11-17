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
import { motion as m } from "framer-motion";

// form schema for contact
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
    <m.footer
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      id="contact"
      className="min-h-screen bg-[url('/assets/78786.jpg')] dark:bg-[url('/assets/darkcity.jpg')]    sm:bg-cover bg-center max-w-full p-4 pb-28"
    >
      <h2 className="pt-28 capitalize text-3xl text-transparent  bg-gradient-to-r from-[#ec008c] to-[#fc6767]  bg-clip-text font-bold text-center">
        Get in touch
      </h2>

      <Card className="max-w-4xl bg-slate-100 dark:bg-background   flex flex-col sm:flex-row  mx-auto mt-12 p-2">
        <Card className="w-full text-white bg-[url('/assets/space.jpg')] bg-center bg-cover  sm:w-96 shrink-0 space-y-5 p-6 ">
          <h4>Contact information</h4>
          <Card className="flex hover:scale-105 duration-500  hover:-skew-x-3 cursor-pointer text-white rounded-2xl p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 items-center gap-3">
            <div className="bg-blue-700 p-2 rounded-xl">
              <LinkedinIcon className="h-8 w-8" />
            </div>
            <Link
              href="https://www.linkedin.com/in/sarathfsd/"
              target="_blank"
              rel="noreferror"
              className="text-sm"
            >
              www.linkedin.com/in/sarathfsd
            </Link>
          </Card>
          <Card className="text-white  hover:scale-105 duration-500  hover:-skew-x-3 cursor-pointer rounded-2xl p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 flex items-center gap-3">
            <div className="bg-rose-700 p-2 rounded-xl">
              <Github className="h-8 w-8" />
            </div>
            <Link
              href="https://github.com/SARATHKUMAR-T"
              target="_blank"
              rel="noreferror"
              className="text-sm"
            >
              github.com/SARATHKUMAR-T
            </Link>
          </Card>
          <Card className="text-white  hover:scale-105 duration-500  hover:-skew-x-3 cursor-pointer rounded-2xl p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 flex items-center gap-3">
            <div className="bg-sky-700 p-2 rounded-xl">
              <BookOpenText className="h-8 w-8" />
            </div>
            <Link
              href="https://drive.google.com/file/d/17Dey8mDvQDky9eIseSyPpm1Y933nZsCb/view?usp=sharing"
              target="_blank"
              rel="noreferror"
              className="text-sm"
            >
              drive.google.com/sarath_resume
            </Link>
          </Card>
          <Card className="text-white  hover:scale-105 duration-500  hover:-skew-x-3 cursor-pointer rounded-2xl p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 flex items-center gap-3">
            <div className="bg-green-700 p-2 rounded-xl">
              <Mail className="h-8 w-8" />
            </div>
            <Link
              href="mailto:sarathkumartk98@gmail.com"
              target="_blank"
              rel="noreferror"
              className="text-sm"
            >
              sarathkumartk98@gmail.com
            </Link>
          </Card>
          <Card className="text-white  hover:scale-105 duration-500  hover:-skew-x-3 cursor-pointer rounded-2xl p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400 flex items-center gap-3">
            <div className="bg-orange-700 p-2 rounded-xl">
              <MapPin className="h-8 w-8" />
            </div>
            <Link href="#" className="text-sm">
              Tiruchirappalli,TN
            </Link>
          </Card>
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
    </m.footer>
  );
}

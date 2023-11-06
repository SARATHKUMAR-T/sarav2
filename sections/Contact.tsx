"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowBigUpDash, LinkedinIcon, Loader2 } from "lucide-react";
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
    console.log(values);
  }

  return (
    <footer id="contact" className="min-h-screen max-w-full">
      <h2 className="pt-32 capitalize text-3xl font-bold text-center">
        Get in touch
      </h2>
      <p className="max-w-xl text-sm  mt-2 mx-auto text-center">
        we'll create high quality linkable content and build at least 40
        hight-authority links to each asset,paving the way for you
        rankings,improve brand.
      </p>
      <Card className="max-w-6xl flex  mx-auto mt-16 p-2">
        <Card className="w-80 shrink-0 space-y-7 p-6 bg-lime-500">
          <h4>Contact information</h4>
          <div className="flex items-center gap-3">
            <LinkedinIcon className="h-4 w-4" />
            <Link href="#">linkedin</Link>
            <ArrowBigUpDash />
          </div>
          <div className="flex items-center gap-3">
            <LinkedinIcon className="h-4 w-4" />
            <Link href="#">Github</Link>
            <ArrowBigUpDash />
          </div>
          <div className="flex items-center gap-3">
            <LinkedinIcon className="h-4 w-4" />
            <Link href="#">My Resume</Link>
            <ArrowBigUpDash />
          </div>
          <div className="flex items-center gap-3">
            <LinkedinIcon className="h-4 w-4" />
            <Link href="#" className="text-sm">
              sarathkumartk98@gmail.com
            </Link>
            <ArrowBigUpDash />
          </div>
          <div className="flex items-center gap-3">
            <LinkedinIcon className="h-4 w-4" />
            <Link href="#" className="text-sm">
              Thiruchirappalli-TN.
            </Link>
            <ArrowBigUpDash />
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

              <Button type="submit" className="w-full  " disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </Card>
    </footer>
  );
}

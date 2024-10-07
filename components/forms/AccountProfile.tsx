"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserValidation } from "@/lib/validations/user";

interface Props {
    user: {
      id: string;
      objectId: string;
      username: string;
      name: string;
      bio: string;
      image: string;
    };
    btnTitle: string;
  }

const AccountProfile =({ user, btnTitle }: Props) => {

    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
          profile_photo: user?.image ? user.image : "",
          name: user?.name ? user.name : "",
          username: user?.username ? user.username : "",
          bio: user?.bio ? user.bio : "",
        },
      });

    const onSubmit = async (values: z.infer<typeof UserValidation>) => {
        const blob = values.profile_photo;
    };
    

    return (
        <Form {...form}>
            <form
            className='flex flex-col justify-start gap-10'
            onSubmit={form.handleSubmit(onSubmit)}
            >
            <FormField
                control={form.control}
                name='profile_photo'
                render={({ field }) => (
                <FormItem className='flex items-center gap-4'>
                    <FormLabel className='account-form_image-label'>
                
                    </FormLabel>
                    <FormControl className='flex-1 text-base-semibold text-gray-200'>
                    
                    </FormControl>
                </FormItem>
                )}
            />
    
            <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                    <FormLabel className='text-base-semibold text-light-2'>
                    Name
                    </FormLabel>
                    <FormControl>
                    <Input
                        type='text'
                        className='account-form_input no-focus'
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
    
            <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                    <FormLabel className='text-base-semibold text-light-2'>
                    Username
                    </FormLabel>
                    <FormControl>
                    <Input
                        type='text'
                        className='account-form_input no-focus'
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
    
            <FormField
                control={form.control}
                name='bio'
                render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                    <FormLabel className='text-base-semibold text-light-2'>
                    Bio
                    </FormLabel>
                    <FormControl>
                    
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
    
            <Button type='submit' className='bg-primary-500'>
                {btnTitle}
            </Button>
            </form>
        </Form>
    );
};

export default AccountProfile
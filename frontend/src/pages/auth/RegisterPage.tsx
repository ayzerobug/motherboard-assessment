
"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input, PasswordInput } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { AppRoutes } from "@/common/Approutes"
import { Link, useNavigate } from "react-router-dom"
import { postRequest } from "@/common/RequestHandler"
import { toast } from "react-toastify"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(6).max(50),
})

const RegisterPage = () => {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
        try {
            const { message, data } = await postRequest("auth/register", values);
            toast.success(message);
            localStorage.setItem("authToken", data.token);
            navigate(AppRoutes.appDashboard);
        } catch (err: any) {
            toast.error(err.message ?? err)
        }
    }


    return (
        <div className="bg-white rounded-xl px-6 py-7 text-center md:min-w-[400px] flex flex-col">
            <h4 className="text-2xl font-semibold my-2">Create Account</h4>
            <p className="text-gray-500 text-sm">Enter your credentials to create your account</p>
            <Form {...form}>
                <form className="space-y-5 text-left mt-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>FULL NAME</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} icon="solar:user-linear" />
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
                                <FormLabel>EMAIL ADDRESS</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Email" {...field} icon="uil:envelope-alt" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>PASSWORD</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="Enter Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <div className="flex justify-between items-center max-md:flex-col  max-md:gap-y-2  max-md:items-start">
                        <div className="items-top flex space-x-2">
                            <Checkbox id="remember-me" />
                            <div className="grid gap-1.5 leading-none">
                                <label htmlFor="remember-me" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    I agree with the terms and conditions
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button type="button" asyncClick={form.handleSubmit(onSubmit)} className="w-full">Create Account</Button>
                    <div className="flex justify-center gap-x-2 items-center">
                        <p className="text-sm text-gray-500">Already have an account?</p>
                        <Link to={AppRoutes.login} className="p-0 text-primary text-sm m-0 font-medium">Login Here</Link>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default RegisterPage
"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";
import { useState } from "react";

interface SignInCardProps {
    setScreen : (state: SignInFlow) => void
}

export const SignInCard = ({setScreen}: SignInCardProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Login to continue</CardTitle>
                <CardDescription>
                    enter your email and password to login
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled={false}
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <Input
                        disabled={false}
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <Button type="submit" size='lg' disabled={false} className="w-full" >Continue</Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button size='lg' variant="outline" className="w-full relative" onClick={() => { }} >
                        <FcGoogle className="size-5 absolute top-3 left-2.5" />
                        Continue With Google
                    </Button>
                    <Button size='lg' variant="outline" className="w-full relative" onClick={() => { }} >
                        <FaGithub className="size-5 absolute top-3 left-2.5" />
                        Continue With Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don&apos;t have an account? <span onClick={()=> setScreen("signUp")} className="text-sky-700 hover:underline cursor-pointer">Sign Up</span>
                </p>
            </CardContent>
        </Card>
    )
}
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Test() {
        return <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
                <nav className="px-12 py-5">
                        <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-none">
                                <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
                                <div className="flex flex-col gap-4">
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" placeholder="Email" />
                                </div>
                        </div>
                </div>
        </div>
}
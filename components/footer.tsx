import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="bg-gray-900">
<div className="max-w-7xl mx-auto px-4 w-full py-10 md:py-16">
    <div className="grid md:grid-cols-3 gap-7">
        <div><Link href="/" className="mb-10 block">
        <Image src="/logo_1.png" alt="Logo" width={128} height={49}/></Link>
        <p className="text-gray-400">Booking hotel online mudah dan cepat</p>
        </div>
        <div>
            <div className="flex gap-20">
                <div className="flex-1 md:flex-none">
                    <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                    <ul className="list-item space-y-5 text-gray-400">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/room">Room</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="flex-1 md:flex-none">
                    <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                    <ul className="list-item space-y-5 text-gray-400">
                        <li><Link href="#">Legal</Link></li>
                        <li><Link href="#">Terms of Use</Link></li>
                        <li><Link href="#">Payment Methods</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <h4 className="mb-8 text-xl font-semibold text-white">Newsletters</h4>
            <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <form action="" className="mt-5">
                <div className="mb-5">
                    <input type="text" name="email" placeholder="Email" className="w-full p-3 rounded-sm bg-white" />
                </div>
                <button type="submit" className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500">Subscribe</button>
            </form>
        </div>
        
    </div>
</div>
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
            &copy; 2026 Hotel Booking. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
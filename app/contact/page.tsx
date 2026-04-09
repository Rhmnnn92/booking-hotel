import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import {
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
} from "react-icons/io5";
import ContactForm from "@/components/contact-form";
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};
const ContactPage = () => {
  return (
    <div>
      <HeaderSection
        title="contact us"
        subtitle="Lorem ipsum dolor sit amet."
      />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get In Touuch
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              nisi accusantium, nemo tempore minus facilis.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoMailOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-ls font-semibold mb-1">Email :</h4>
                  <p>Email-us@example.com</p>
                </div>
              </li>

              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoCallOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-ls font-semibold mb-1">Phone Number :</h4>
                  <p>0821xxxxxx</p>
                </div>
              </li>

              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoLocationOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-ls font-semibold mb-1">Adress :</h4>
                  <p>Tasikmalaya, Jawa Barat</p>
                </div>
              </li>
            </ul>
          </div>
          {/* form Contact */}
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

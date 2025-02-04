import Footer from "@/components/Footer";
import PaymentComponent from "@/components/PaymentComponent";

export default function Home() {
  return (
    <div className="w-full bg-[#12372A]">
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="font-extrabold text-4xl lg:text-6xl leading-4 text-white pt-8 lg:pb-2 pb-6 ">Create Payment</h1>
        <h1 className="font-extrabold text-4xl lg:text-6xl leading-4 text-white pb-6 lg:pb-8">Checkout Form</h1>

        <PaymentComponent/>
      </div>
      
      <Footer/>
    </div>
  );
}

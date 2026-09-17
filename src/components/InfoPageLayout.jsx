import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import Header from "./Header.jsx";

const InfoPageLayout = ({eyebrow, title, description, children}) => (
    <div className="min-h-screen bg-white font-sans text-gray-800">
        <Header />
        <main>
            <section className="bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">{eyebrow}</p>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">{title}</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">{description}</p>
                </div>
            </section>
            <section className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
                {children}
                <div className="mt-14 rounded-2xl bg-purple-600 px-6 py-10 text-center text-white shadow-lg shadow-purple-200 md:px-10">
                    <h2 className="text-2xl font-bold">Ready to take control?</h2>
                    <p className="mx-auto mt-2 max-w-xl text-purple-100">Create an account and start keeping your finances in one clear place.</p>
                    <Link to="/signup" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-purple-700 transition-colors hover:bg-purple-50">Get started <ArrowRight className="h-4 w-4" /></Link>
                </div>
            </section>
        </main>
    </div>
);

export default InfoPageLayout;
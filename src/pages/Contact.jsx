import {Mail, MessageCircle, UserRound} from "lucide-react";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

const Contact = () => (
    <InfoPageLayout
        eyebrow="Contact us"
        title="We'd love to hear from you"
        description="Questions, issues, or ideas for Money Manager — send us a message and we'll get back to you promptly."
    >
        <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100">
                <Mail className="h-7 w-7 text-purple-600" />
                <h2 className="mt-5 text-xl font-bold text-gray-900">Email us</h2>
                <p className="mt-3 leading-7 text-gray-500">For general questions or support, reach out any time.</p>
                <a href="mailto:support@moneymanager.app" className="mt-3 inline-block font-medium text-purple-600 hover:text-purple-700">support@moneymanager.app</a>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100">
                <MessageCircle className="h-7 w-7 text-purple-600" />
                <h2 className="mt-5 text-xl font-bold text-gray-900">Share feedback</h2>
                <p className="mt-3 leading-7 text-gray-500">Tell us what would make managing your finances easier — we read every message.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100">
                <UserRound className="h-7 w-7 text-purple-600" />
                <h2 className="mt-5 text-xl font-bold text-gray-900">Account help</h2>
                <p className="mt-3 leading-7 text-gray-500">For sign-in or account issues, include the email address linked to your account.</p>
            </div>
        </div>
    </InfoPageLayout>
);

export default Contact;
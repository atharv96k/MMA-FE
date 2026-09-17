import {ChartNoAxesCombined, ShieldCheck, WalletCards} from "lucide-react";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

const values = [
    {icon: WalletCards, title: "One place for everything", text: "Income, expenses, and categories live together, giving you a single, accurate view of your finances instead of scattered notes and spreadsheets."},
    {icon: ChartNoAxesCombined, title: "Clarity through insights", text: "Your dashboard and transaction history surface spending patterns as they emerge, so decisions are based on data, not guesswork."},
    {icon: ShieldCheck, title: "Reliable by design", text: "Built for daily use, with secure account access and automated reporting, so tracking your finances stays effortless over time."},
];

const About = () => (
    <InfoPageLayout
        eyebrow="About Money Manager"
        title="A clearer way to understand your money"
        description="Money Manager gives you an organized, accurate view of what comes in, what goes out, and where it's going."
    >
        <div className="grid gap-6 md:grid-cols-3">
            {values.map(({icon: Icon, title, text}) => (
                <article key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100">
                    <div className="mb-5 inline-flex rounded-xl bg-purple-50 p-3 text-purple-600">
                        <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-3 leading-7 text-gray-500">{text}</p>
                </article>
            ))}
        </div>
    </InfoPageLayout>
);

export default About;
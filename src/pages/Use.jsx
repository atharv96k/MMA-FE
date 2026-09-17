import {ArrowDownToLine, LayoutDashboard, Tags} from "lucide-react";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

const Use = () => {
    const steps = [
        {icon: ArrowDownToLine, title: "Add your transactions", text: "Record each income source and expense as it happens to keep your records current."},
        {icon: Tags, title: "Organize with categories", text: "Assign categories to transactions to understand the areas where you earn and spend."},
        {icon: LayoutDashboard, title: "Review your dashboard", text: "Check the overview, charts, and recent transactions to stay on top of your financial activity."},
    ];
    return <InfoPageLayout eyebrow="How to use" title="Track your money in three simple steps" description="Start small, make tracking a habit, and let your dashboard turn everyday transactions into a clearer financial view."><div className="grid gap-6 md:grid-cols-3">{steps.map(({icon: Icon, title, text}, index) => <article key={title} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100"><span className="absolute right-6 top-6 text-sm font-bold text-purple-200">0{index + 1}</span><div className="mb-5 inline-flex rounded-xl bg-purple-50 p-3 text-purple-600"><Icon className="h-6 w-6" /></div><h2 className="text-xl font-bold text-gray-900">{title}</h2><p className="mt-3 leading-7 text-gray-500">{text}</p></article>)}</div></InfoPageLayout>;
};
export default Use;
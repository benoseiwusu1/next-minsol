import { Link } from "react-router-dom";
interface ReportCardProps {
  title: string;
  link: string;
  isHighlighted?: boolean;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, link }) => {
  return (
    <div className="w-full md:w-[200px] bg-white rounded-lg shadow-lg flex flex-col justify-between p-4 h-[180px]">
      {/* Title */}
      <div className="flex-grow flex items-center">
        <p className="font-bold text-left">{title}</p>
      </div>
      {/* View PDF Link */}
      <div className="mt-auto">
        <Link to={link} className="text-orange-400 font-bold hover:underline">
          VIEW PDF
        </Link>
      </div>
    </div>
  );
};

export default ReportCard;

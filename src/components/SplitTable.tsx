// File: TableComponent.tsx
import {
  Table as Main,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Data for measurements
const tableData = [
  { header: "Diameter", measurements: ["46mm / 47mm", "39mm", "34mm"] },
  {
    header: "Length",
    measurements: ["0.9m - 3m", "0.9m - 2.4m", "0.45m - 1.8m"],
  },
  {
    header: "Outer Diameter",
    measurements: ["47mm ± 1mm", "39mm ± 1mm", "34mm ± 1mm"],
  },
  {
    header: "Taper Diameter",
    measurements: ["41mm ± 1mm", "34mm ± 1mm", "28mm ± 1mm"],
  },
  {
    header: "Sloth Width",
    measurements: ["22mm ± 1mm", "17mm ± 1mm", "14.5mm ± 1mm"],
  },
  { header: "Steel Thickness", measurements: ["3.2mm", "2.3mm", "2.3mm"] },
];

const SplitTable: React.FC = () => {
  const maxRows = Math.max(
    ...tableData.map((data) => data.measurements.length)
  );

  return (
    <div className="overflow-x-auto mt-12">
      <Main className="min-w-full">
        <TableCaption>Available Specifications</TableCaption>
        <TableHeader>
          <TableRow>
            {tableData.map((data, index) => (
              <TableHead className="w-1/6 bg-main text-white" key={index}>
                {data.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Render each row of measurements */}
          {Array.from({ length: maxRows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {tableData.map((data, colIndex) => (
                <TableCell key={colIndex}>
                  {data.measurements[rowIndex] || "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Main>
    </div>
  );
};

export default SplitTable;

import { useModal } from "@/context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  selectedItem: any;
}

const SolutionDetails: React.FC<Props> = ({ selectedItem: item }) => {
  const { isOpen, closeSheet } = useModal();

  if (!item) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(state) => !state && closeSheet()}>
      <DialogContent className="sm:max-w-2xl p-8 text-white">
        <DialogHeader>
          <DialogTitle className="text-lg md:text-2xl">
            {item.title && item.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start space-y-3 rounded-md overflow-hidden">
          <div className="w-full h-[150px]">
            <img
              src={item.image && item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          {item &&
            item.details?.split(". ").map((sentence: string, index: number) => (
              <p key={index} className="leading-relaxed">
                {sentence.trim()}
              </p>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionDetails;

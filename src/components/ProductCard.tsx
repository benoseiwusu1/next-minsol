import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

interface ProductCardProps {
  key: number;
  image: string;
  title: string;
  description?: string;
  description2?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  description2,
}) => {
  return (
    <div className="md:max-w-[300px] w-full bg-white shadow-md rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="w-full h-1 bg-gradient-to-tr from-main opacity-50" />
      <div className="p-6">
        <h3 className="text-lg font-bold mt-4">{title}</h3>
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-4 px-4 py-2 bg-main text-white rounded-md">
              View Details
            </button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none max-w-[80%] ">
            <div className="bg-white border-none max-w-full w-full h-auto p-10 rounded-xl flex items-center gap-6">
              <DialogHeader className="w-4/6">
                <div className="h-[350px] w-[400px]">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover my-6"
                  />
                </div>
              </DialogHeader>
              <div
                className="h-[350px] overflow-y-auto"
                style={{
                  maxHeight: "350px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-grey mt-3">{description}</p>
                {description2 && (
                  <p className="text-grey mt-3">{description2}</p>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductCard;

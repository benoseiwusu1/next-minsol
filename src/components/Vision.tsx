// components/Vision.tsx
import { Icon } from "@iconify/react";
import React from "react";

const Vision: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch py-10 w-full font-primary">
      <div className="flex-1 bg-white w-full ">
        <div className="flex flex-col container mx-auto">
          <div className="px-4 md:px-20 py-8">
            <h3 className="text-2xl mb-4 text-left">Vision</h3>
            <p className="text-left text-grey leading-relaxed">
              To be the leading provider of innovative mining consultancy and
              services across Sub-Saharan Africa, delivering exceptional value
              and sustainable solutions to meet the evolving needs of the
              mineral resources sector. Through excellence, innovation, and
              strategic presence, we aim to revolutionize the mining industry
              and empower our clients for long-term success.
            </p>
          </div>
        </div>
        <div className="px-4 md:px-20 py-8">
          <h3 className="text-2xl mb-4 text-left">Mission</h3>
          <p className="text-left text-grey leading-relaxed">
            At Minsol Limited, our mission is to deliver top-tier mining
            consultancy and logistics services that drive operational excellence
            and innovation. We are dedicated to understanding and addressing the
            unique challenges of the mining industry, providing solutions that
            ensure efficiency, compliance, and growth for our clients.
          </p>
        </div>
      </div>

      {/* Values Column */}
      <div className="flex-1 bg-main text-white w-full px-4 md:px-8 py-8">
        <h3 className="text-2xl mb-5">Our Values</h3>
        <div className="flex flex-col gap-y-8 text-[15px]">
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Excellence:</span> We are committed to
              delivering the highest quality services and solutions, setting
              benchmarks for performance and reliability in the mining sector
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Integrity:</span> We conduct our business
              with transparency, honesty, and accountability, fostering trust
              and long-term relationships with our stakeholders
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Adaptability:</span> We respond dynamically
              to the evolving needs of the mining industry, ensuring that our
              services remain relevant and effective in a changing environment
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Collaboration:</span> We believe in working
              closely with our clients and partners to achieve mutual success
              and drive positive outcomes in every project we undertake
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Sustainability:</span> We prioritize
              sustainability by focusing on environmental care, social
              responsibility, and economic growth. Our goal is to support the
              mining industry's long-term health and the well-being of
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

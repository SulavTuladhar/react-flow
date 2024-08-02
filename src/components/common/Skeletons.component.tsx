import React from "react";
import DeleteButtonComponent from "./DeleteButton.component";

export const PaymentCountrySkeleton = ({ country }: { country: string }) => {
  return (
    <div className="w-fit border-2 border-[#aa1fff] p-2 flex items-center justify-between bg-white rounded-full px-6">
      <p className="text-[#aa1fff] text-md">{country}</p>
      <DeleteButtonComponent func={() => {}} />
    </div>
  );
};

export const PaymentProviderSkeleton = ({ name }: { name: string }) => {
  return (
    <div className="w-fit border-2 border-[#5e5eff] flex items-center bg-white justify-between fap-4 p-2 px-4 rounded-full">
      <div>{name}</div>
      <DeleteButtonComponent func={() => {}} />
    </div>
  );
};

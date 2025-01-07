
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectDuration = ({ onUserSelect }) => {

  return (
    <div className="mt-7">
      <h2 className="font-bold text-xl text-primary">Duration</h2>
      <p className="text-gray-500">Select the duration of your video</p>
      <Select
        onValueChange={(value) => {
     
          onUserSelect("duration", value); // Pass the selected value to parent
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="30 Seconds" value="30 Seconds">
            30 Seconds
          </SelectItem>
          <SelectItem key="60 Seconds" value="60 Seconds">
            60 Seconds
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDuration;

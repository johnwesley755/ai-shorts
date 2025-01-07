import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden
import Image from "next/image";

const CustomLoading = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white">
        <VisuallyHidden>
          <AlertDialogTitle>Loading...</AlertDialogTitle>{" "}
          {/* Hidden Title for screen readers */}
        </VisuallyHidden>
        <div className="bg-white flex flex-col items-center my-10 justify-center">
          <Image
            src="/load-time.gif" // Ensure it's placed in the 'public' folder
            width={100}
            height={100}
            alt="Loading GIF"
          />
          <h2 className="font-bold mt-4">
            Generating your video... Do not refresh
          </h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;

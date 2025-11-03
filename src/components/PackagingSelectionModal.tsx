
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import PackagingViewer3D from "@/components/PackagingViewer3D";
import frontImage from "@/assets/packaging/front.png";
import backImage from "@/assets/packaging/back.png";
import leftImage from "@/assets/packaging/left.png";
import rightImage from "@/assets/packaging/right.png";
import topImage from "@/assets/packaging/top.png";
import bottomImage from "@/assets/packaging/bottom.png";

interface PackagingOption {
  id: string;
  label: string;
}

interface PackagingSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  packagingOption: PackagingOption | undefined;
  isLargePackaging: boolean;
}

const PackagingSelectionModal = ({
  isOpen,
  onClose,
  onConfirm,
  packagingOption,
  isLargePackaging,
}: PackagingSelectionModalProps) => {
  if (!packagingOption) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Packaging: {packagingOption.label}</DialogTitle>
          <DialogDescription>
            Rotate and explore the 3D packaging model. Drag to rotate, scroll to zoom.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full h-[500px] rounded-lg overflow-hidden">
            <PackagingViewer3D
              frontImage={frontImage}
              backImage={backImage}
              leftImage={leftImage}
              rightImage={rightImage}
              topImage={topImage}
              bottomImage={bottomImage}
            />
          </div>
          
          <div className="bg-amber-50 text-amber-800 p-4 rounded-lg w-full">
            <h4 className="font-semibold text-sm flex items-center gap-1">
              <Package size={16} className="inline" /> 
              Packaging details:
            </h4>
            <ul className="mt-2 text-sm">
              {isLargePackaging ? (
                <>
                  <li>• Heavy-duty plastic material</li>
                  <li>• UV-protected to prevent degradation</li>
                  <li>• Double-sealed for freshness</li>
                  <li>• Ideal for bulk requirements</li>
                </>
              ) : (
                <>
                  <li>• Airtight seal for freshness</li>
                  <li>• UV-protected material</li>
                  <li>• Resealable zip lock</li>
                  <li>• Easy to store and handle</li>
                </>
              )}
            </ul>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-center mt-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button 
            type="button" 
            onClick={onConfirm}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-spice-600 hover:from-amber-600 hover:to-spice-700"
          >
            Select this packaging
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PackagingSelectionModal;

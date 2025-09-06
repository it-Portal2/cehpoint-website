import { StickyBanner } from "../ui/sticky-banner";
import { Shield, Award } from "lucide-react";

export function Banner() {
  return (
    <div className="fixed flex h-10 w-full flex-col overflow-y-auto z-50">
      <StickyBanner className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
        <div className="flex items-center justify-center text-xs sm:text-sm text-white drop-shadow-md">
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* GSTIN */}
            <div className="flex items-center space-x-1.5">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white/90" />
              <span className="font-medium text-white/90">GSTIN:</span>
              <span className="font-mono text-white font-semibold tracking-wide">
                19ETGPB5153Q1Z5
              </span>
            </div>
            
            {/* Separator */}
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="sm:hidden text-white/60">•</div>
            
            {/* ISO Certification */}
            <div className="flex items-center space-x-1.5">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white/90" />
              <span className="font-medium text-white/90">Certified:</span>
              <span className="font-semibold text-white">
                ISO 9001:2015
              </span>
            </div>
          </div>
        </div>
      </StickyBanner>
    </div>
  );
}
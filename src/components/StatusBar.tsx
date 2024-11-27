import { Battery, Signal, Wifi, Clock } from "lucide-react";

export const StatusBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-xs bg-apple-bg">
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4" />
        <span>Carrier</span>
        <Wifi className="w-4 h-4" />
      </div>
      <Clock className="w-4 h-4" />
      <div className="flex items-center gap-1">
        <Battery className="w-4 h-4" />
        <span>100%</span>
      </div>
    </div>
  );
};
"use client";

import { useSocket } from "./providers/socket-provider";
import { Badge } from "./ui/badge";

const SocketIniciator = () => {
  const isConnected = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="text-white border-none bg-yellow-600">
        Fallback: Polling every 1s
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="text-white border-none bg-emerald-600">
      Live: Real-time updates
    </Badge>
  );
};

export default SocketIniciator;

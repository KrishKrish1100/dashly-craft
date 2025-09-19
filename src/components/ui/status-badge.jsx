import { cn } from "@/lib/utils";

const statusVariants = {
  "in-progress": "bg-info text-info-foreground",
  "complete": "bg-success text-success-foreground", 
  "pending": "bg-warning text-warning-foreground",
  "approved": "bg-success text-success-foreground",
  "rejected": "bg-danger text-danger-foreground",
};

export function StatusBadge({ status, className, ...props }) {
  const normalizedStatus = status?.toLowerCase().replace(/\s+/g, '-') || 'pending';
  
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        statusVariants[normalizedStatus] || statusVariants.pending,
        className
      )}
      {...props}
    >
      <span className="mr-1 h-2 w-2 rounded-full bg-current opacity-75" />
      {status}
    </div>
  );
}
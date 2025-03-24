import { Textarea } from "@/components/ui/textarea";

interface PostBodyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  rows?: number;
}

export function PostBody({
  value,
  onChange,
  required = true,
  className = "w-full min-h-24 resize-none bg-white",
  rows = 8,
}: PostBodyProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="body" className="text-sm font-medium">
        Content
      </label>

      <Textarea
        id="body"
        name="body"
        placeholder="Write your post content here..."
        value={value}
        onChange={onChange}
        className={className}
        rows={rows}
        required={required}
      />
    </div>
  );
}

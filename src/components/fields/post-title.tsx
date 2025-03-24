import { Input } from "@/components/ui/input";

interface PostTitleProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
  className?: string;
}

export function PostTitle({
  value,
  onChange,
  required = true,
  pattern = "^.{3,}$",
  className = "w-full min-h-12 bg-white",
}: PostTitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="title" className="text-sm font-medium">
        Title
      </label>

      <Input
        id="title"
        name="title"
        placeholder="Post title"
        pattern={pattern}
        className={className}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

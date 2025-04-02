
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface PlaceholderAvatarProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const PlaceholderAvatar = ({ name, className = "", size = "md" }: PlaceholderAvatarProps) => {
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Generate consistent color based on name
  const getColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-dqaa-500",
      "bg-gold-400",
    ];
    
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };
  
  const sizeClasses = {
    sm: "h-10 w-10 text-sm",
    md: "h-16 w-16 text-lg",
    lg: "h-24 w-24 text-xl",
    xl: "h-32 w-32 text-2xl"
  };
  
  return (
    <Avatar className={`${sizeClasses[size]} ${className}`}>
      <AvatarFallback className={`${getColor(name)} text-white`}>
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default PlaceholderAvatar;

import * as icon from "lucide-react-native/icons";
import { styled } from "nativewind";
import React from "react";
import type { ColorValue } from "react-native";

export type IconName = keyof typeof icon;
export interface IconProps extends LucideProps {
  name: keyof typeof icon;
  size?: number;
  color?: ColorValue;
  className?: string;
}

export default function Icon({
  name,
  size,
  color,
  className,
  ...rest
}: IconProps) {
  const IconComponent = icon[name];

  if (!IconComponent) {
    console.warn(`${name} Icon not found in Lucide.`);
    return null;
  }
  const StyledIcon = styled(IconComponent);
  return React.createElement(StyledIcon, {
    size,
    color,
    className,
    ...rest,
  });
}

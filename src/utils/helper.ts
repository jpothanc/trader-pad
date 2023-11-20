import { IconType } from "react-icons";

import React from "react";
import {
  FaCircleInfo,
  FaDatabase,
  FaTicket,
  FaSwatchbook,
} from "react-icons/fa6";
import { GiSpiderWeb } from "react-icons/gi";

export function getIcon(icon: IconType, size: string): any | undefined {
  return React.createElement(icon, {
    style: {
      width: size,
      height: size,
    },
  });
  return undefined;
}

export function getIconByName(
  name: string | undefined,
  size: string
): any | undefined {
  switch (name) {
    case "database":
      return getIcon(FaDatabase, size);
      break;
    case "web":
      return getIcon(GiSpiderWeb, size);
      break;
    case "FaSwatchbook":
      return getIcon(FaSwatchbook, size);
      break;
    case "FaTicket":
      return getIcon(FaTicket, size);
      break;
    case "FaCircleInfo":
      return getIcon(FaCircleInfo, size);
      break;

    default:
      break;
  }

  return FaDatabase;
}

export function getColor(status: boolean): string {
  let color = "Light";
  switch (status) {
    case true:
      color = "success";
      break;
    case false:
      color = "danger";
      break;
    default:
      break;
  }
  return color;
}

export function openExternalLink(url: string): void {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.focus();
  } else {
    console.error(
      "Unable to open external link. Please check your browser settings."
    );
  }
}

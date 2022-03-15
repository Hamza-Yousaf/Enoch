import { format } from "date-fns";

export const datePosted = (postDate: any) => {
  if (postDate) {
    return ` ${format(new Date(postDate), "LLLL")} ${format(
      new Date(postDate),
      "d"
    )}`;
  }
};

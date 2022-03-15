export function truncateString(str: any, num: any) {
  if (str?.length > num) {
    return str?.slice(0, num) + "...";
  } else {
    return str;
  }
}

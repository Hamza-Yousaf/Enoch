import { useMutation } from "@apollo/client";
import { LIKE_REACT } from "../graphql/mutattions/homePost";

export const postReactionLikeTypes = [
  {
    type: "like",
    icon: "/images/reaction1.png",
    mutation: [0],
  },
  {
    type: "love",
    icon: "/images/reaction2.png",
    mutation: "",
  },
  {
    type: "love2",
    icon: "/images/reaction3.png",
    mutation: "",
  },
  {
    type: "clap",
    icon: "/images/reaction4.png",
    mutation: "",
  },
  {
    type: "light",
    icon: "/images/reaction5.png",
    mutation: "",
  },
  {
    type: "wow",
    icon: "/images/reaction6.png",
    mutation: "",
  },
];

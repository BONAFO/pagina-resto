import { useNavigationHook } from "./Navigation";

export default function useRoutesHook() {
  const contactPath = useNavigationHook("contact");
  const homePath = useNavigationHook("home");
  const aboutPath = useNavigationHook("about");
  const menuPath = useNavigationHook("menu");
  return {
    contactPath,
    homePath,
    aboutPath,
    menuPath,
  };
}

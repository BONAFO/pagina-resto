import useRoutesHook from "../Routes";

export default function useAboutHook() {
  const { homePath, menuPath } = useRoutesHook();

  return {
    homePath,
    menuPath,
  };
}

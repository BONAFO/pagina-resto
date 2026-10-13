import useRoutesHook from "../Routes";

export default function useFooterHook() {
  const { contactPath, homePath, menuPath } = useRoutesHook();

  return {
    contactPath,
    homePath,
    menuPath,
  };
}

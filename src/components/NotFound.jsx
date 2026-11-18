import { useRouteDict } from "@/lib/i18n/useRouteDict";
import { ActionButton, HomeLink, TerminalScreen } from "./TerminalScreen";

export function NotFound({ children }) {
  const { errors } = useRouteDict();

  return (
    <TerminalScreen
      title={errors.notFoundTitle}
      actions={
        <>
          <ActionButton onClick={() => window.history.back()}>{errors.back}</ActionButton>
          <HomeLink>{errors.home}</HomeLink>
        </>
      }
    >
      {children ?? errors.notFound}
    </TerminalScreen>
  );
}

import { ErrorComponent, useRouter } from "@tanstack/react-router";
import { useRouteDict } from "@/lib/i18n/useRouteDict";
import { ActionButton, HomeLink, TerminalScreen } from "./TerminalScreen";

export function DefaultCatchBoundary({ error }) {
  const router = useRouter();
  const { errors } = useRouteDict();

  return (
    <TerminalScreen
      title={errors.errorTitle}
      actions={
        <>
          <ActionButton onClick={() => router.invalidate()}>{errors.retry}</ActionButton>
          <HomeLink>{errors.home}</HomeLink>
        </>
      }
    >
      <div className="text-left">
        <ErrorComponent error={error} />
      </div>
    </TerminalScreen>
  );
}

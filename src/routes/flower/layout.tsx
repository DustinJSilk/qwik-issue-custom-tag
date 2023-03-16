import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export type TitleProps = {
  tag?: "h1" | "h2";
};

export const Title = component$((props: TitleProps) => {
  const Tag = props.tag ?? "h1";

  return (
    <Tag>
      <Slot />
    </Tag>
  );
});

export default component$(() => {
  const { url } = useLocation();
  const isChild = url.pathname.includes("child");

  return (
    <main class="relative z-0">
      {!isChild && <Title>inner</Title>}
      <Slot />
    </main>
  );
});

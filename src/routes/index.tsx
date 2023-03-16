import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <Link class="mindblow" href="/flower/">
        First child
      </Link>
    </div>
  );
});

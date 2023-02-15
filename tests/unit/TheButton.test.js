import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import TheButton from "../../src/components/TheButton.vue";

test("Button component renders", async () => {
  const wrapper = mount(TheButton, {
    props: {
      title: "Title",
    },
  });

  expect(wrapper.text()).toContain("Title");
});

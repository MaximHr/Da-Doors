import {
  IconUsers,
  IconShoppingBag,
} from "@tabler/icons-react";

const data = {
  navMain: [
    {
      title: "Products",
      url: "/admin/products",
      icon: IconShoppingBag,
      accessedBy: ["Owner", "Product manager"],
    },
    {
      title: "Members",
      url: "/admin/members",
      icon: IconUsers,
      accessedBy: ["Owner"],
    }
  ],
};

export default data;
